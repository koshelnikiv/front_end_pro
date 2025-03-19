var myArray = [6, 8, 'text', 'text2', 7, 11];
console.log('Масив: ');
console.log(myArray);
console.log('Елемент: 8');

function removeElement(arr, item) {
    let newArr = new Array;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != item) {
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
}

console.log('Результат: ');
console.log(removeElement(myArray, 8));
