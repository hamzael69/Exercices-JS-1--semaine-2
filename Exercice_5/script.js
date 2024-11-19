const images = document.querySelectorAll("#container > img");

images.forEach((image) => {
  image.addEventListener("mouseover", handleMouseOverChangeImg);
  image.addEventListener("mouseout", handleMouseOutChangeImg);
});

function handleMouseOverChangeImg(event) {
    event.target.src = event.target.src.replace(".jpg", "_2.jpg");
}

function handleMouseOutChangeImg(event) {
    event.target.src = event.target.src.replace("_2.jpg", ".jpg");
}


// tu peux utiliser mouseenter à la place de mouseover 
