// gallery 
const containerPict = document.querySelector('.picture')
const jumbo = document.querySelector('.jumboPict')

const thumb = document.querySelectorAll('.thumb')
let i = 0
thumb.forEach(function(item){
    item.addEventListener('click', function(){
        jumbo.src = item.src
    })
})

// navbar
const navBar = document.querySelector('.navButton input')
const olNavBar = document.querySelector('nav ol')

navBar.addEventListener('click', function(){
    olNavBar.classList.toggle('display')
})
