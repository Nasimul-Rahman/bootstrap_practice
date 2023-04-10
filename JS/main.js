console.log("hello");

var loader = document.getElementById("preloader");

// window.addEventListener('load', function() {
//     loader.style.display = "none"
// })


let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo_animation')

window.addEventListener('load', function() {
    setTimeout(opacityChange, 2200);
    setTimeout(displayNone, 2500);
})

function opacityChange() {
    intro.style.opacity = 0;
 }

 function displayNone() {
    intro.style.display = 'none';
 }