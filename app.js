let searchInput = document.getElementById("user-input");
let submitButton = document.getElementById("submit-btn");
let loadMore = document.getElementById("load-more")
let currentPage = 10;
let keyword = "";

async function fetchImages() {
    // Update keyword with the value from the search input
    keyword = searchInput.value.trim();

    // Construct the URL for fetching images
    const url = `https://api.unsplash.com/search/collections?page=${currentPage}&query=${keyword}&client_id=OpsS4QTgMI9vfGlS6kEAvebdi1kHnoVoEjsSP1Xomwk`;

    try {
        // Fetch images from the API
        const response = await fetch(url);
        const data = await response.json();
    
        
        // Display images
        displayImages(data.results); // Assuming results contain the array of images
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function displayImages(data) {
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Clear previous images
    
    // Check if data is an array
    if (Array.isArray(data)) {

        data.map(element => {
            let url = element.cover_photo.urls.small
            // console.log(data);
            // console.log(url);
            // imageContainer.innerHTML = `<img src="${url}" alt="">`

            
            imageContainer.innerHTML += `<img src="${url}" alt="">`
        });
    } else {
        console.error('Invalid data format:', data);
    }
}

submitButton.addEventListener("click", fetchImages);

loadMore.addEventListener("click" , ()=>{
    currentPage = currentPage + 10;
    console.log(currentPage);
    fetchImages()
})
