//buttons
const likeBtn1=document.getElementById("BTN1");
const likeBtn2=document.getElementById("BTN2");
const likeBtn3=document.getElementById("BTN3");
const likeBtn4=document.getElementById("BTN4");

//counter
const likeNumber1=document.getElementById("likes1");
const likeNumber2=document.getElementById("likes2");
const likeNumber3=document.getElementById("likes3");
const likeNumber4=document.getElementById("likes4");


//print likes
let ifCounterExists1=localStorage.getItem("likeBtn1")
likeNumber1.innerHTML=ifCounterExists1;

let ifCounterExists2=localStorage.getItem("likeBtn2")
likeNumber2.innerHTML=ifCounterExists2;

let ifCounterExists3=localStorage.getItem("likeBtn3")
likeNumber3.innerHTML=ifCounterExists3;

let ifCounterExists4=localStorage.getItem("likeBtn4")
likeNumber4.innerHTML=ifCounterExists4;

//activating buttons
likeBtn1.addEventListener('click',function countUP (){
    let ifCounterExists=localStorage.getItem("likeBtn1")
    if (ifCounterExists){
        ifCounterExists= parseFloat(ifCounterExists)
        localStorage.setItem("likeBtn1",ifCounterExists+1)
        ifCounterExists=localStorage.getItem("likeBtn1")
        likeNumber1.innerHTML=ifCounterExists;
    }else{
        localStorage.setItem("likeBtn1",1)
        let ifCounterExists=localStorage.getItem("likeBtn1")
        likeNumber1.innerHTML=ifCounterExists;
    }
});

likeBtn2.addEventListener('click',function countUP1 (){
    let ifCounterExists=localStorage.getItem("likeBtn2")
    if (ifCounterExists){
        ifCounterExists= parseFloat(ifCounterExists)
        localStorage.setItem("likeBtn2",ifCounterExists+1)
        ifCounterExists=localStorage.getItem("likeBtn2")
        likeNumber2.innerHTML=ifCounterExists;
    }else{
        localStorage.setItem("likeBtn2",1)
        ifCounterExists=localStorage.getItem("likeBtn2")
        likeNumber2.innerHTML=ifCounterExists;
    }
});

likeBtn3.addEventListener('click',function countUP2 (){
    let ifCounterExists=localStorage.getItem("likeBtn3")
    if (ifCounterExists){
        ifCounterExists= parseFloat(ifCounterExists)
        localStorage.setItem("likeBtn3",ifCounterExists+1)
        ifCounterExists=localStorage.getItem("likeBtn3")
        likeNumber3.innerHTML=ifCounterExists;
    }else{
        localStorage.setItem("likeBtn3",1)
        ifCounterExists=localStorage.getItem("likeBtn3")
        likeNumber3.innerHTML=ifCounterExists;
    }
});

likeBtn4.addEventListener('click',function countUP3 (){
    let ifCounterExists=localStorage.getItem("likeBtn4")
    if (ifCounterExists){
        ifCounterExists= parseFloat(ifCounterExists)
        localStorage.setItem("likeBtn4",ifCounterExists+1)
        ifCounterExists=localStorage.getItem("likeBtn4")
        likeNumber4.innerHTML=ifCounterExists;
    }else{
        localStorage.setItem("likeBtn4",1)
        ifCounterExists=localStorage.getItem("likeBtn4")
        likeNumber4.innerHTML=ifCounterExists;
    }
});