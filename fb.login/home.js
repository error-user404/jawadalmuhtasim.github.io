
document.querySelector('.hi').addEventListener('click', hi)

function hi() {
    setTimeout (function() {
        document.querySelector('.intro').remove()

        const pranked = new Audio('boom.mp3');

        let hiImage = document.createElement('img')

        hiImage.src = 'ohmark.jpeg'

        hiImage.style.maxWidth = '100%'
        hiImage.style.height = 'auto'

        pranked.play()
        document.querySelector('.hey').appendChild(hiImage)
    }, 5000)
}
