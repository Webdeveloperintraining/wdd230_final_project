function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
    document.querySelector('.burguer').classList.toggle("open");
    
}

const clickX= document.querySelector(".burguer");
clickX.onclick=toggleMenu;


// function toggleMenu() {
//     document.querySelector(".menu").classList.toggle("open");
//     document.querySelector('.burguer').classList.toggle("open");
    
// }

// const clickS= document.querySelector(".burguer");
// clickS.onclick=toggleMenu;