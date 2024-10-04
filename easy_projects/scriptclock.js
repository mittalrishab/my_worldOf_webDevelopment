let hour = document.getElementById("h");
let minute = document.getElementById("m");
let second = document.getElementById("s");

let time=setInterval(() => {
    let mydate = new Date();
    if(mydate.getHours()>12){
        hour.innerHTML=mydate.getHours()%12;
    }
    else{
        hour.innerHTML = (mydate.getHours()<10?"0":"")+mydate.getHours();
    }
    minute.innerHTML =(mydate.getMinutes()<10?"0":"")+mydate.getMinutes();
    second.innerHTML =(mydate.getSeconds()<10?"0":"")+mydate.getSeconds();
})

setTimeout(()=>{
    clearInterval(time);
},70000);