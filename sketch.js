let buttons = [];
let clicks = 1;
let serotonin = 25;
let counter = 0;
let startTime;
let maxTime;
let color = 0;
let ads = [];

function setup() {
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  buttons.push(new button(width/2,height/2,150,50));
    // startTime=millis();
    // //counter = millis();
    // maxTime = millis() + 1000;
}

function draw() {
  background(220);
  for(let i in buttons){
    buttons[i].display();
  }
  
  for(let i in ads){
    ads[i].display();
  }
  
  if(clicks===1){
    fill(0);
    textSize(16)
    text('You won\'t regret it :)', width/2, height/2 + 50);
    text('What\'s the worst that could happen?', width/2, height/2 + 75)
  }
  if(clicks === 2){
    push()
    fill(255)
    noStroke();
    rect(width/2,height/2,260,30);
    pop()
    
    fill(0);
    textSize(16)
    text('Didn\'t that feel good? Try it again ;)',width/2,height/2);
  if (counter-startTime < maxTime) {
  counter=millis();
  } 
    push()
    rectMode(CORNER)
    fill(0,56,100);
    noStroke();
    rect(110,15,map(counter-startTime,0,maxTime,0,serotonin),20)
    pop()
  }
  if(clicks>1){
    textSize(24)
    fill(0)
    text('Serotonin', 50,25);
  }
  if(clicks ===3){
        push()
    fill(255)
    noStroke();
    rect(width/2,height/2,425,30);
    pop()
    
    fill(0);
    textSize(16)
    text('You\'re so good at this! But not good enough :( Keep going.',width/2,height/2);
  }
  if(clicks>2){
    push()
    rectMode(CORNER)
    if(serotonin>=500){
    fill(108,56,100);
    } else if(serotonin < 500 && serotonin >=50){
    fill(32,56,100);
    } else{
      fill(0,56,100)
    }
    noStroke();
    rect(110,15,serotonin,20);
    pop()
  }

  
}

function mousePressed(){

  if(clicks===1){
        startTime=millis();
    //counter = millis();
    maxTime = 1000;
  }
  for(let i in buttons){
    if(mouseX >= buttons[i].x - buttons[i].width/2 && mouseX <= buttons[i].x + buttons[i].width/2 && mouseY >= buttons[i].y - buttons[i].height/2 && mouseY <= buttons[i].y + buttons[i].height/2){
      clicks++
        if(clicks>2){
    ads.push(new ad(random(width),random(40,height)));
  }
      serotonin += random(-20,60);
        for(let j=0;j<clicks;j++){
      buttons.push(new button(random(width),random(40,height),150,50))
      }
      buttons.splice(i,1);
    }
  }
  
}

class ad{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  display(){
    if(frameCount%10===0){
    color = random(360);
    }
    fill(color,28,100)
    rect(this.x, this.y, 125,150);
    push()
    noFill();
    strokeWeight(1)
    stroke(0)
    textSize(30)
    text('AD', this.x, this.y);
    pop();
  }
}

class button{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = random(360);
    
  }
  
  display(){
    fill(this.color,28,100);
    if(mouseX >= this.x - this.width/2 && mouseX <= this.x + this.width/2 && mouseY >= this.y - this.height/2 && mouseY <= this.y + this.height/2){
      fill(this.color,28,90);
    }
    rect(this.x,this.y,this.width,this.height);
    fill(0)
    textSize(16);
    text('Click here!', this.x, this.y)
  }
}