function getNumbers() {
    let MyNumber = document.querySelector('.number').value;
    let strNumber = MyNumber.toString();
    //console.log(strNumber);   
    if (strNumber.length != 5) {
        console.log("Помилка! Введіть п'ятизначне число!");
    }
    else { console.log(`${strNumber.charAt(0)} ${strNumber.charAt(1)} ${strNumber.charAt(2)} ${strNumber.charAt(3)} ${strNumber.charAt(4)}`); }
}

