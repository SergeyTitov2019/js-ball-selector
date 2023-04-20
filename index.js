const main = document.getElementById('main')
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

function hideMockBallsByDirectClick() {

    mockBall.forEach((el) => el.addEventListener('click', () => {
        el.classList.add('hide-mock-ball')
        console.log(el);
    }))

}

function hideBallsByButtonClick() {

    mockBall.forEach((ball) => {
        ball.ontransitionend = function () {
            if (ball.classList.contains('anime')) {
                ball.classList.add('hide')
            }
        }
    })

    randomGeneratedBall.forEach((ball) => {
        ball.ontransitionend = function () {
            if (ball.classList.contains('anime')) {
                ball.classList.add('hide')
            }
        }
    })

}

function refreshPage() {

    btn.addEventListener('click', onRefresh)

}

function onGenerateBallSet(num) {

    for (let i = 0; i < num; i++) {
        const ball = document.createElement('div')
        ball.innerHTML = Math.round(Math.random() * 100).toString()

        getColorRange(ball)

        ball.classList.add('ball')
        ball.classList.add('random')
        // main.insertAdjacentHTML('beforeend', `<div class="ball random ${ball.classList}"> ${ball.innerHTML}`)
        main.appendChild(ball)
    }
    randomGeneratedBall = document.querySelectorAll('.random')
    randomGeneratedBall.forEach((el) => el.addEventListener('click', () => {
        el.classList.add('hide-mock-ball')
    }))

}

function onClickSelection() {

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

function Machine(product) {
    this.product = product
}


Machine.prototype = {
    on: function () {
        console.log(`${this.product} is ON - 2`)
    },
    off: function () {
        console.log(`${this.product} is OFF - 2`)
    }
}

function TapeRecorder(product) {
    this.product = product
}

TapeRecorder.prototype = Object.create(Machine.prototype)

let tapeRecorder = new TapeRecorder('base')

// console.log(tapeRecorder);

function BaseCar(brand, model = 'mercedes') {
    this.brand = brand;
    this.model = model;
}

BaseCar.prototype.drive = function () {
    console.log('Car on road!', this.brand, this.model)
}
let audi = new BaseCar('X5')

// console.log(audi);

class Car {
    constructor(brand = 'BMW', model = '3', wheel = 4) {
        this.brand = brand;
        this.model = model;
        this._wheels = wheel;
    }

    drive() {
        console.log('Hi! I am', this.brand, this.model)
    }

    static infoData() {
        console.log('INFO')
    }

    get wheel() {
        console.log(this._wheels);
    }

    set wheel(value) {
        this._wheels = value
    }

}

class ElectroCar extends Car {
    constructor(brand, model , wheel) {
        super(brand, model ,wheel = 8);
    }
    drive() {
        super.drive()
        console.log('Hi! I am from DRIVE', this.brand, this.model)
    }
}

let tesla = new ElectroCar('Mercedes', 'GL')
// console.log(tesla);
// tesla.drive()
// // tesla.wheel = 25
// tesla.wheel
//
//
//
