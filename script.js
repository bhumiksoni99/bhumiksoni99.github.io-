const scooter = document.querySelector('.image')

scooter.addEventListener('click',() => {
    scooter.classList.add('activate')
    const sound = document.getElementById('vespa')
    sound.play()   
})

scooter.addEventListener('scroll',() => {
    scooter.classList.add('scrollAnimate')

})


// const navbar = document.querySelector('nav')

// navbar.addEventListener('scroll',() => {
    
// })
        




