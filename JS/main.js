console.log("hello");

var loader = document.getElementById("preloader");

// window.addEventListener('load', function() {
//     loader.style.display = "none"
// })


let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo_animation')

window.addEventListener('load', function() {
    setTimeout(opacityChange, 2500);
    setTimeout(displayNone, 2900);
})

function opacityChange() {
    intro.style.opacity = 0;
 }

 function displayNone() {
    intro.style.display = 'none';
 }