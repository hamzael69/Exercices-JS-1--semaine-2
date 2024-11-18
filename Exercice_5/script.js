const images = document.querySelectorAll("img");

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
