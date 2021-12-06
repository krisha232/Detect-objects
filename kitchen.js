img = "";
status1="";
function back() {
    window.location = "index.html";
}
function setup() {

    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}
function preload() {
    img = loadImage('kitchen.jpg')
}
function draw() {
    image(img, 0, 0, 640, 420);
}


function modelLoaded() {
    console.log("modelLoaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
