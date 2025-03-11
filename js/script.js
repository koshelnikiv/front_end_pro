var userYearBirth = prompt('Вкажи свій рік народження: ');
var userCity = prompt('З якого ти міста: ');
var userSport = prompt('Твій улюблений вид спорту: ');
var now = new Date().getFullYear();

/* якщо нічого не введено - прирівнюємо до відміни вводу */

if (userYearBirth != null) { userYearBirth = userYearBirth.trim() === '' ? null : userYearBirth; };
if (userCity != null) { userCity = userCity.trim() === '' ? null : userCity; };
if (userSport != null) { userSport = userSport.trim() === '' ? null : userSport; };

var result = '';

/* перевірка чи всі значення ввели. Формуємо фразу "Шкода..." */

if ((userYearBirth === null) || (userCity === null) || (userSport === null)) {

    result = "Шкода, що ти не захотів ввести ";
    result = result + (userYearBirth === null ? 'свій рік народження' + (((userCity === null) || (userSport === null)) ? ', ' : '') : '');
    result = result + (userCity === null ? 'своє місто' + (null === userSport ? ' та ' : '') : '');
    result = result + (userSport === null ? 'свій улюблений вид спорту' : '') + '.';
};

/* обчислюємо вік та формуємо частину результату */
var userAge = 'Твій вік: ' + (userYearBirth === null ? ' - ' : (now - userYearBirth));
result = `${result} 
${userAge}`;


/* перевірка міста */
if (userCity != null) {
    result = result + `
Ти живеш у `;
    switch (userCity.toLowerCase()) {
        case 'київ':
            result = result + 'столиці України.';
            break;
        case 'вашингтон':
            result = result + 'столиці США.';
            break;
        case 'лондон':
            result = result + 'столиці Великобританії.';
            break;
        default:
            result = result + 'місті ' + userCity + '.';
    };
};
if (userSport != null) {
    result = result + `
Твій улюблений спорт: ${userSport}`;

    /* перевірка міста */

    switch (userSport.toLowerCase()) {
        case 'бокс':
            result = result + `
Круто! Хочеш стати Володимиром Кличко? `;
            break;
        case 'футбол':
            result = result + `
Круто! Хочеш стати Андрієм Шевченко? `;
            break;
        case 'боротьба':
            result = result + `
Круто! Хочеш стати як Жан Беленюк? `;
            break;
    };
};
alert(result);