//declara las variables
var bg,sleep, brush, gym, eat, bath, move;
var astronaut, edges;



function preload(){
  //precarga las imagenes PISTA 1
  bg= loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
  bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
  move = loadAnimation("move.png","move.png","move1.png","move1.png");
}



function setup() {
  //crea el tamaño del canvas
  createCanvas(600, 500);
  
  //crea el sprite para el astronauta PISTA 2
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  //carga la imagen bg para que quede de fondo en vez de un color
  background(bg);
  
  //dibuja los sprites
  drawSprites();
  
  //crea el texto para las instrucciones PISTA 3
  textSize(20);
  fill("white")
  text("Instrucciones:",20, 35);
  textSize(15);
  text("Flecha hacia arriba = Cepillarse",20, 55);
  text("Flecha hacia abajo= Ejercitarse",20, 70);

 
  // crea los bordes asignandolos a la variable edges
  edges = createEdgeSprites();
  
  
  
  //haz que el astronauta rebote en los bordes (edges)
astronaut.bounceOff(edges);

  //PISTA 4 guiate para hacer los demas botones
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  //crea el boton hacia abajo
 if(keyDown("DOWN_ARROW")){
   astronaut.addAnimation("gym", gym);
   astronaut.changeAnimation("gym");
   astronaut.y = 370;
   astronaut.velocityY = 0;
   astronaut.velocityX = 0;
 }
  // crea el boton hacia la izquierda
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bath", bath);
    astronaut.changeAnimation("bath");
    astronaut.y = 310;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  // crea el boton hacia la derecha
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("sleep", sleep);
    astronaut.changeAnimation("sleep");
    astronaut.y = 390;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
// crea el boton m
  if(keyDown("m")){
    astronaut.velocityX = 2
    astronaut.velocityY = 2

  }
}
