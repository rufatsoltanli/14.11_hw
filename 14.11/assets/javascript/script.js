const menubutton = document.querySelector("#header_responsive .cont .menu")
const navdropdown = document.querySelector("#header_responsive .respnav")
const navdropdownul=document.querySelector("#header_responsive .respnav ul")
console.log(navdropdown);
menubutton.addEventListener("click", function () {
    navdropdown.classList.toggle("navdropdown")
    console.log(1);
    navdropdownul.classList.toggle("navdropdownul")
})
