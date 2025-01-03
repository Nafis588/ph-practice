let video; 
let canvas; 
let selectedFilter = ""; 

function setup() {
    canvas = createCanvas(640, 480); 
    canvas.parent("canvas-container"); 

    video = createCapture(VIDEO); 
    video.size(640, 480); 
    video.hide();
}

function draw() {
    image(video, 0, 0, width, height);

    if (selectedFilter === "grayscale") {
        filter(GRAY); 
    } else if (selectedFilter === "invert") {
        filter(INVERT); 
    } else if (selectedFilter === "sepia") {

        tint(112, 66, 20); 
    } else if (selectedFilter === "reset") {
        noTint(); 
    }
}

document.getElementById("grayscale-btn").addEventListener("click", () => {
    selectedFilter = "grayscale";
});

document.getElementById("invert-btn").addEventListener("click", () => {
    selectedFilter = "invert"; 
});

document.getElementById("sepia-btn").addEventListener("click", () => {
    selectedFilter = "sepia"; 
});

document.getElementById("reset-btn").addEventListener("click", () => {
    selectedFilter = "reset";
});
