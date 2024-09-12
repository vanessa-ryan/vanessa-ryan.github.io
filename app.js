document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch ("https://foodtasia.com/wp-content/uploads/2019/03/choc-banana-bread-2-4.jpg")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;

        })
    
    }

})