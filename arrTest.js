const arr = Array(10)
    .fill(0)
    .map(i => Math.round(Math.random() * 100))

const  arr5 = [12,15,'steve']
console.log(arr);
console.log(arr5['15']);

const maxArr = function (arr) {
    let minElement = arr[0]
    let maxElement = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i]
        }
    }
    for(let num of arr){
        if(  maxElement < num ){
            maxElement = num
        }
    }
    return maxElement
    // return minElement
}

console.log(maxArr(arr));
console.log(Math.max(...arr));


/* пример с переворачивание строки */
let str = 'Hello my friends'

const newStr = str.split(' ')
    .map(i => [...i].reverse().join(''))
    .toString()
    .replace(/,/g, ' ')


// console.log([...str]);

