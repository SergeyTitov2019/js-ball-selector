const main = document.getElementById('main')
const ball = document.createElement('div')
const btn = document.getElementById('refresh')
const btnChoose = document.querySelectorAll('.btn')
const mockBall = document.querySelectorAll('#sub .ball')
let randomGeneratedBall

refreshPage()
onGenerateBallSet(40)
hideMockBallsByDirectClick()
onClickSelection()
hideBallsByButtonClick()


function onRefresh() {
    location.reload()
}

function hideMockBallsByDirectClick(){

    mockBall.forEach((el) => el.addEventListener('click', () => {
        el.classList.add('hide-mock-ball')
        console.log(el);
    }))

}

function hideBallsByButtonClick(){

    mockBall.forEach((ball) => {
        ball.ontransitionend = function (){
            if(ball.classList.contains('anime')){
                ball.classList.add('hide')
            }
        }
    })

    randomGeneratedBall.forEach((ball) => {
        ball.ontransitionend = function (){
            if(ball.classList.contains('anime')){
                ball.classList.add('hide')
            }
        }
    })

}

function refreshPage(){

    btn.addEventListener('click', onRefresh)

}

function onGenerateBallSet(num){

    for (let i = 0; i < num; i++) {
        ball.innerHTML = Math.round(Math.random() * 100).toString()
        getColorRange(ball)
        main.insertAdjacentHTML('beforeend', `<div class="ball random ${ball.classList}"> ${ball.innerHTML}`)
    }
    randomGeneratedBall = document.querySelectorAll('.random')
    randomGeneratedBall.forEach((el) => el.addEventListener('click', () => {
        el.classList.add('hide-mock-ball')
    }))

}

function onClickSelection(){

    btnChoose.forEach((button) => {
        button.addEventListener('click', () => {
            let category = button.dataset.filter
            filter(category, mockBall)
            filter(category, randomGeneratedBall)
        });
    })

}

function filter(category, items) {

    items.forEach(item => {
        const isItemFiltered = !item.classList.contains(category)
        const isShowAll = category.toLowerCase() === 'all'

        if (isItemFiltered && !isShowAll) {
            item.classList.add('anime')
        } else {
            item.classList.remove('anime')
            item.classList.remove('hide')
        }
    })

}



