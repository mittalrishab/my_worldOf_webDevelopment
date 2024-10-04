let reset = document.getElementById("restart");
let play = document.getElementById("play");
let stop = document.getElementById("stop");
let display=document.getElementById("display");
let [seconds,minutes,hours]=[0,0,0];
let timer=null;
function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
            if(hours==24){
                hours=0;
            }
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    display.innerHTML=h+":"+m+":"+s;
}
play.addEventListener("click",()=>{
    play.style.transform="scale(0.85)"
    play.style.transition="all ease-in-out 0.5s";
    play.style.backgroundColor="rgb(197, 0, 0)";
    setTimeout(()=>{
        play.style.transform="scale(1)" ;
        play.style.backgroundColor="red";
    },500);
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
});
reset.addEventListener("click", () => {
    reset.style.transform="scale(0.85)"
    reset.style.transition="all ease-in-out 0.5s";
    setTimeout(()=>{
        reset.style.transform="scale(1)" ;
    },500);
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    display.innerHTML="00:00:00";
});
stop.addEventListener("click",()=>{
    stop.style.transform="scale(0.85)"
    stop.style.transition="all ease-in-out 0.5s";
    setTimeout(()=>{
        stop.style.transform="scale(1)" ;
    },500);
    clearInterval(timer);
});