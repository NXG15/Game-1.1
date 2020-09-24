var ball1, ball2;
var center;
var randNumber;
//var centralNumber, centerText;
/*var arrNum = [];
var seqNum ;
var i ;*/
var num1;

//Changing numbers
var up = true;
var value = 0;
//value = centralNumber;
var increment = 1;
var ceiling = 100;

function setup() {
  createCanvas(500,700);

  //spikes
  createSprite(0,height-30,40,40);
  createSprite(50, height-30, 40, 40);
  createSprite(100,height-30,40,40);
  createSprite(150,height-30,40,40)
  createSprite(200,height-30,40,40)
  createSprite(250,height-30,40,40)
  createSprite(300,height-30,40,40)
  createSprite(350,height-30,40,40)
  createSprite(400,height-30,40,40)
  createSprite(450,height-30,40,40)
  createSprite(500,height-30,40,40)

  //balls
  ball1 = createSprite(240,height-250,20,20);
  ball2 = createSprite(270,height-250,20,20);

  //flashing ball
  center = createSprite(250,height-550,75,75);
  centerText = text("hi",250,height-550);
  //rect(250,height-550,75,75);


  //random number corner
  randNumber = round(random(50,150));

  
}

function draw() {
  //frameRate(30);
  background(0);
  
  //ball velocity
  if(keyDown(UP_ARROW)){
    ball1.velocityY = -30;
  }

  if(ball1.y <=250 && keyDown(UP_ARROW)){
    ball2.velocityY = -30;
  }

  //balls touching center
  if(ball1.collide(center)){
    ball1.velocityY = 0;

    //number1 = value;
    
  }

  if( (ball1.width/2 + center.width/2 == ball1.y - center.y) && 
      ball2.collide(center)){
    ball2.velocityY = 0;
    //number1 = value;
    
  }

  //console.log(ball1.position);
 



  //console.log(number1);

  //changing number
  fill("white");
  textSize(20);
  text(randNumber,50,50);

  
  drawSprites();

  num1 = changeNumber();
  if(ball1.y==198){
    //text(num1,50,200);
    console.log(num1);
  }
  
  text(value,250,height-550);
  //console.log(centralNumber);

  /*for( i= 1; i<51; i++){

    arrNum.push(i);
   //console.log(arrNum[i]);
   centralText = text(arrNum[i],250,height-550);

  
    
  }*/
}

function changeNumber() {
  frameRate(10);
  if (up == true && value <= ceiling) {
    value += increment;
    
    
    if (value == ceiling) {
      up = false;
    }
  } else {
      up = false
      value -= increment;
      
     
      if (value == 0) {
        up = true;
      }
  }

  return value;
}