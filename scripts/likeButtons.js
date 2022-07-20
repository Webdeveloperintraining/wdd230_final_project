const likeBtn1=document.querySelector("#temple-section .temples section:nth-child(1) img.like");
const likeBtn2=document.querySelector("#temple-section .temples section:nth-child(2) img.like");
const likeBtn3=document.querySelector("#temple-section .temples section:nth-child(3) img.like");
const likeBtn4=document.querySelector("#temple-section .temples section:nth-child(4) img.like");

const likeNumber1=document.querySelector("#temple-section .temples section:nth-child(1) span.likes");
const likeNumber2=document.querySelector("#temple-section .temples section:nth-child(2) span.likes");
const likeNumber3=document.querySelector("#temple-section .temples section:nth-child(3) span.likes");
const likeNumber4=document.querySelector("#temple-section .temples section:nth-child(4) span.likes");



var likes1=0;
var likes2=0;
var likes3=0;
var likes4=0;

//window.localStorage.setItem(like1,likes1);
//window.localStorage.setItem(like2,likes2);
//window.localStorage.setItem(like3,likes3);
//window.localStorage.setItem(like4,likes4);
//console.log(localStorage);


function likeBtnClicked(count,value){
    //localStorage.getItem();
    localStorage.setItem(count,value);
    count.TextContent=value++;
}

likeBtn1.addEventListener("click",likeBtnClicked(likeNumber1,likes1));
likeBtn2.addEventListener("click",likeBtnClicked(likeNumber2,likes2));
likeBtn3.addEventListener("click",likeBtnClicked(likeNumber3,likes3));
likeBtn4.addEventListener("click",likeBtnClicked(likeNumber4,likes4));