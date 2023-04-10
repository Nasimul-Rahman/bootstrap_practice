console.log("hello");

var loader = document.getElementById("preloader");

// window.addEventListener('load', function() {
//     loader.style.display = "none"
// })


let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo_animation')

window.addEventListener('load', function() {
    setTimeout(myURL, 2500);
})

function myURL() {
    intro.style.opacity = 0;
 }