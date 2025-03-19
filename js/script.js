var myArray = [6, 8, 'text', 'text2', 7, 11];
console.log('Масив: ');
console.log(myArray);

function getAvgFromArray(Arr) {
    let sum = 0;
    let qty = 0;
    let avg = 0;
    for (let i = 0; i < Arr.length; i++) {
        if (!(isNaN(Arr[i]))) {
            sum += Arr[i];
            qty++;
        }
    }
    if (qty === 0) {
        avg = null;
    }
    else {
        avg = sum / qty;
    }
    return avg;
}

console.log('Середнє арифметичне числових значень: ' + getAvgFromArray(myArray));