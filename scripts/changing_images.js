/* Code made with the contribution of the following page:  */

const leftArrow=document.querySelector("#left")
const rightArrow=document.querySelector("#right")

var i=0;
var images=["./images/bountiful-temple-large.jpg","./images/bapstism-related-content-large.jpg","./images/calgary-alberta-temple-large.jpg","./images/preparing-to-enter-the-temple-large.jpg","./images/outside the temple-large.jpg","./images/temple-sealing-large.jpg"];
var time=4000;

function changingImages(){
    document.slide.src= images[i]
    if (i < images.length - 1){
        i++

    } else {
        i=0
    }
    setTimeout("changingImages()",time);

    }
    window.onload=changingImages;

