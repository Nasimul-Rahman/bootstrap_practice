console.log("working")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            entry.target.classList.remove('hidden')
            entry.target.classList.remove('hidden_general_description')
            entry.target.classList.remove('hidden_product_card')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))