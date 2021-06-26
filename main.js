nosex="";
nosey="";

function preload() {
    img=loadImage("https://i.postimg.cc/XqZ13wjV/Clown-Nose.png")
}

function setup() {
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',getposes);
}

function TakaSnapshot() {
    save("MyFilter.png");
}

function modelloaded() {
    console.log("poseNet is loaded");
}

function getposes(results) {
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex);
        console.log("nosey="+nosey);
    }
}

function draw() {
    image(video,0,0,500,500);
    /*fill("red")
    stroke("brown")
    circle(nosex, nosey, 30)*/
    image(img,nosex-15,nosey-15,30,30)
}