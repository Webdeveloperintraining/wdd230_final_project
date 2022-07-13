
const leftArrow=document.querySelector("#left")
const rightArrow=document.querySelector("#right")

var i=0;
var images=["./images/bapstism-related-content-small.jpg","./images/preparing-to-enter-the-temple-small.jpg","./images/outside the temple-small.jpg","./images/temple-sealing-small.jpg"];
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



// leftArrow.addEventListener("click",changingImages)
// rightArrow.addEventListener("click",changingImages)
