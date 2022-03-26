function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}


function draw() {
    image(video, 0, 0, 600, 500);
}


Beliver = "";
ImperialMarch = "";

function preload()
{
    ImperialMarch = loadSound("ImperialMarch.mp3")
    Beliver = loadSound("Beliver");
}