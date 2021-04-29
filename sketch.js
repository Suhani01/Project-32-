const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png"
var hour
function preload() {
    getBgImage()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);



    Engine.update(engine);

    fill("black")
    textSize(30)
    console.log(hour+"33")
    if(hour>=12){
        text("time: "+hour%12+" PM",50,100)
    }else if(hour===0){
        text("time:12 AM ",50,100)
    }else{
        text("time: "+hour%12+" AM",50,100)
    }
    


}

async function getBgImage(){
    var response=await fetch ("http://worldclockapi.com/api/json/est/now")
    var responseJSON=await response.json()
    var dateTime=responseJSON.currentDateTime
    hour=dateTime.slice(11,13)
    console.log(hour)

    if(hour>=04&&hour<=06){
        bg="sunrise1.png"
    }
    else if(hour>=06&&hour<=08){
        bg="sunrise2.png"
    }
    else if(hour>=08&&hour<=11){
        bg="sunrise3.png"
    }
    else if(hour>=11&&hour<=13){
        bg="sunrise4.png"
    }
    else if(hour>=13&&hour<=15){
        bg="sunrise5.png"
    }
    else if(hour>=15&&hour<=17){
        bg="sunrise6.png"
    }
    else if(hour>=17&&hour<=18){
        bg="sunset7png"
    }
    else if(hour>=18&&hour<=20){
        bg="sunset8.png"
    }
    else if(hour>=20&&hour<=23){
        bg="sunset9.png"
    } 
    else if(hour>=23&&hour<=00){
        bg="sunset10.png"
    } 
    else if(hour>=00&&hour<=03){
        bg="sunset11.png"
    }  else{
        bg="sunset12.png"
    }  
    backgroundImg=loadImage(bg)
}
