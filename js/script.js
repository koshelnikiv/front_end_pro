let num = 20;
let str = '';

while (num <= 30) {
    str = str + (str = '' ? '' : ' ') + num;
    num = num + 0.5;
}

console.log(str);