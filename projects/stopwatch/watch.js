const display=document.getElementById("display");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;

function start(){
     if(!isRunning){
          startTime=date.now()-elapsedTime;
          timer=setInterval(update,10);
          isRunning=true;
        

     }
     

}

function stop(){
     
}

function reset(){
     
}


function update(){
     const currentTime=Date.now();
     elapsedTime=currentTime-startTime;

     let hours= math.floor(elapsedTime /(1000 *60 *60));
     let minutes= math.floor(elapsedTime /(1000 *60 )%60);
     let seconds=math.floor(elapsedTime / 1000 % 60);
     let milliseconds=math.floor(elapsedTime % 1000 /10);

     hours=String(hours).padStart(2,"0");
     minutes=String(minutes).padStart(2,"0");
     seconds=String(seconds).padStart(2,"0");
     milliseconds=string(milliseconds).padStart(2,"0");

     display.textcontent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
     


}
