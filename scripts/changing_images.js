/* Code made with the contribution of the following page:  */
var i=0;
var images=["./images/bountiful-temple-large2.jpg","./images/bapstism-related-content-large.jpg","./images/calgary-alberta-temple-large2.jpg","./images/preparing-to-enter-the-temple-large.jpg","./images/outside-the-temple-large.jpg","./images/temple-sealing-large.jpg"];
var time=4000;
//test=[]

// test.push(document.querySelector("#slideshow img:nth-child(1)").src)
// test.push(document.querySelector("#slideshow img:nth-child(2)").src)
// test.push(document.querySelector("#slideshow img:nth-child(3)").src)
// test.push(document.querySelector("#slideshow img:nth-child(4)").src)

// console.log(test)

function myFunction (){
    test.push(document.querySelector("#slideshow img").src)
}


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
