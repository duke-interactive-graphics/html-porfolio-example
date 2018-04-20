let speed = 1;
let x=0;

function setup(){
    createCanvas(800, 800);
    background(255)
    noStroke();

    for(var i=0; i<100; i++){
        fill(255, 200, 200);
        ellipse(random(0, 800), random(0, 800), 40, 40);
    }
}

function draw(){
    textAlign(CENTER);
    textSize(60)
    fill(155, 200, 100);
    text("This is My Awesome Sketch!!!!", width/2, height/2)

    

}