const images = [
    "./image/1.png",
    "./image/2.png",
    "./image/3.png",
    "./image/4.png",
    "./image/5.png",
];

let index = 0;
const img = document.getElementById("showSlider");


img.src = images[index];

const nextButton = () => {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    img.src = images[index];
};

const prevButton = () => {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    img.src = images[index];
};

setInterval(() => {
    nextButton();
}, 3000);
