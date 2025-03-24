function askNumber100() {
    let input;

    for (let i = 0; i < 10; i++) {
        input = prompt("Введіть число більше 100:");

        // Перевірка на скасування prompt або на порожнє значення або на текст
        if (input === null || input.trim() === "" || isNaN(input)) {
            if (input === null || input.trim() === "") {
                console.log("Ввід скасовано або порожній.")
            }
            else { console.log(`Ви ввели текст: ${input}`); }
            return;
        }

        // Перетворюємо введення на число
        const number = Number(input);

        if (number > 100) {
            console.log(`Ви ввели число більше 100: ${number}`);
            return;
        }
    }

    console.log(`Цикл завершився. Останнє введення: ${input}`);
}

askNumber100();