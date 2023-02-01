//Переменные


let canvas = window.document.querySelector('#canvas')
let sfBtn = window.document.querySelector('#fsBtn')
sfBtn.addEventListener('click', () => {
    if (window.document.fullscreen) {
        window.document.exitFullscreen()
    } else {
        canvas.requestFullscreen()
    }
})


let hero = document.querySelector('#hero')
let heroImg = document.querySelector('#sprite')

let position = 0
let heroPositon = 0


let leftBtn = document.querySelector('#left')
let rightBtn = document.querySelector('#right')

//Функции перемещения персонажа
rightHandler = () => {
    heroImg.style.transform = 'scale(-1,1)'
    position += 1
    heroPositon += 1
    if (position > 5) {
        position = 0
    }
    heroImg.style.left = `-${position * 283}px`
    hero.style.left = `${heroPositon * 20}px`
}

leftHandler = () => {
    heroImg.style.transform = 'scale(1,1)'
    position += 1
    heroPositon -= 1
    if (position > 5) {
        position = 0
    }
    heroImg.style.left = `-${position * 283}px`
    hero.style.left = `${heroPositon * 20}px`
}

//Обработчик событий
let timer = null
let x = 0
let halfWidth = window.screen.width / 2

let onTouchStart = (event) => {

    if (event.type === 'mousedown') {
        x = event.screenX
    } else {
        x = event.touches[0].screenX
    }
    console.log(x)
    console.log(halfWidth)

    timer = setInterval(() => {
        if (x > halfWidth) {
            rightHandler()
        } else {
            leftHandler()
        }
    }, 100)
}

let onTouchEnd = (event) => {

    clearInterval(timer)
}


window.ontouchstart = onTouchStart
window.onmousedown = onTouchStart

window.onmouseup = onTouchEnd
window.ontouchend = onTouchEnd



// leftBtn.addEventListener('click', leftHandler )
// rightBtn.addEventListener('click', rightHandler )





