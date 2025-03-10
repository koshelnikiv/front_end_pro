var myNumber = prompt('Введіть тризначне число:');
var strNumber = myNumber.toString();

if (isNaN(myNumber)) {
    alert("Помилка! Введіть число!");
}
else if (strNumber.length != 3) {
    alert("Помилка! Введіть тризначне число!");   
}
else {

    if ((strNumber.charAt(0) == strNumber.charAt(1)) && (strNumber.charAt(1) == strNumber.charAt(2))) {
        alert("Всі цифри однакові!");
    }
    else if ((strNumber.charAt(0) == strNumber.charAt(1)) || (strNumber.charAt(1) == strNumber.charAt(2)) || (strNumber.charAt(0) == strNumber.charAt(2))) {
        alert("Є дві однакові цифри!");
    }
    else {
        alert("Всі цифри різні!");
    }
};