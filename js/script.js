var num = prompt('Введіть число:');

if (isNaN(num)) {
    alert("Помилка! Введіть число!");
}
else {
    var issimple = (num == 1 ? false : true);
    let i = 2;
    while (i <= (num - 1)) {
        if (num % i === 0) {
            issimple = false;
            break;
        }
        i++;
    }
}
console.log(`Число ${num} ` + (issimple ? `просте` : `не є простим`));