var str = prompt('Введіть строку:', "hello world");/*"hello world"*/
var str_array = Array.from(prompt('Введіть символи:', 'l, d').replaceAll(',', '').replaceAll(' ', '')); /*['l', 'd']*/

console.log('Вхідна строка: ' + str);
console.log('Символи для видалення: ' + str_array);

function delstring(fstr, fstr_array) {
    let newstr = '';
    for (let i = 0; i < fstr.length; i++) {
        if (!(fstr_array.includes(fstr.charAt(i)))) {
            newstr = newstr + fstr.charAt(i);
        }
    }
    return newstr;
}

console.log('Результат: ' + delstring(str, str_array));