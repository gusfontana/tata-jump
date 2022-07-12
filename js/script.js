const tata = document.querySelector('.tata')
const pipe = document.querySelector('.pipe')

const jump = () => {
    tata.classList.add('jump')

    setTimeout(() => {
        tata.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const tataPosition = +window.getComputedStyle(tata).bottom.replace('px', '') //o + muda string pra num

    if (pipePosition <= 120 && pipePosition > 0 && tataPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        tata.style.animation = 'none'
        tata.style.bottom = `${tataPosition}px`

        tata.src = './images/game-over.png'
        tata.style.width = '100px' //75px
        tata.style.bottom = '5px'
        tata.style.marginLeft = '50px'

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump)