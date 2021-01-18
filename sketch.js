var Dog,happydog,foodS,foodStock,database;

function preload()
{
  DogImage=loadImage("Dog.png")
  happydog=loadImage("happydog.png")
}

function setup() {
  createCanvas(500,500);
  database=firebase.database()
  Dog=createSprite(250,200,5,5)
  Dog.scale=0.2
  Dog.addImage(DogImage)
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
 

  
}


function draw() { 
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    Dog.addImage(happydog)
  }
  if(keyWentUp(UP_ARROW)){
     Dog.addImage(DogImage)
  }
  

  drawSprites();
  textSize(12)
  fill("red")
  stroke("black")
  text("Milk Bottles remaining:"+ foodS,150,100)
  text("Note:Press the UP_ARROW key to feed Drago Milk",150,50)
console.log(foodS)

if(foodS<0){
  
}

}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  x=x-1
database.ref('/').update({
  Food:x
})
}


