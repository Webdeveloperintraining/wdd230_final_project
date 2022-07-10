function toggleMenu() {
    document.querySelector(".main-nav").classList.toggle("open");
    document.querySelector('.burguer').classList.toggle("open");
    
}

const clickX= document.querySelector(".burguer");
clickX.onclick=toggleMenu;

function togglenav2() {
    document.querySelector(".secondary-nav").classList.toggle("open");
    //document.querySelector('.burguer').classList.toggle("open");
    
}

//const clickS= document.querySelector(".burguer");
clickS.onclick=toggleMenu;

