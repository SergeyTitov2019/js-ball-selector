function getColorRange(item){

    if (item.innerHTML <= 20) {
        item.classList = 'red'
        item.innerHTML = 'red'
    } else if (item.innerHTML > 20 && item.innerHTML <= 40) {
        item.classList = 'green';
        item.innerHTML = 'green'
    } else if (item.innerHTML > 40 && item.innerHTML <= 60) {
        item.classList = 'blue'
        item.innerHTML = 'blue'
    } else if (item.innerHTML > 60 && item.innerHTML <= 80) {
        item.classList = 'yeloow'
        item.innerHTML = 'yeloow'
    } else {
        item.classList = 'pink'
        item.innerHTML = 'pink'
    }
}


