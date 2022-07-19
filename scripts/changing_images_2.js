/* Code made with the contribution of the following page: https://www.w3schools.com/w3css/w3css_slideshow.asp */
var myIndex = 0;
var myIndex2 = 0;
carousel();
carousel2();


function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 4 seconds
}

function carousel2() {
  var j;
  var y = document.getElementsByClassName("mySlides2");
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > y.length) {myIndex2 = 1}    
  y[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 6000); // Change image every 4 seconds
}