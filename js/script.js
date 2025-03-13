var num = prompt('Введіть число:');

if (isNaN(num)) {
    alert("Помилка! Введіть число!");
}
else {
    let i = 1;
    while (i ** 2 <= num) {
        console.log(i);
        i++;
    }
}