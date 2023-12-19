console.log("gallery.js is working");

const imageModal = document.querySelectorAll('.image_modal');
const imageModalClose = document.querySelectorAll('.image_modal_close');
const imageContainers = document.querySelectorAll('.image_gallery_card');
const section = document.querySelectorAll('section');

console.log(section);

for (let i = 0; i < imageContainers.length; i++) {
    console.log(imageContainers[i]);
    imageContainers[i].addEventListener("click", function() {
        imageModal[i].style.display = 'flex'
        imageModal[i].style.opacity = '1';
        imageModal[i].classList.remove('fadeOut')
        imageModal[i].classList.add('fadeIn')
        for (let j = 0; j < section.length; j++) {
            section[j].classList.remove('.hidden')
        }
    })
}

for (let i = 0; i < imageModalClose.length; i++) {
    console.log(imageModalClose[i]);
    imageModalClose[i].addEventListener("click", function() {
        setTimeout(function() {
            imageModal[i].style.opacity = '0';
            imageModal[i].style.display = "none";
            imageModal[i].classList.remove('fadeIn')
          }, 1000)
          imageModal[i].classList.add('fadeOut')
        for (let j = 0; j < section.length; j++) {
            section[j].classList.add('.hidden')
        }
    })
}