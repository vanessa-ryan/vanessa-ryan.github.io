document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch ("C:\Users\vanes\OneDrive\Documents\Couch to Coder\choc-banana-bread-2-4.jpg")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;

        })
    
    }

})