const contactBook = {
    // масив з контактами
    contacts: [
        {
            name: "Олена",
            phone: "+380931234567",
            email: "olena@example.com"
        },
        {
            name: "Іван",
            phone: "+380671234567",
            email: "ivan@example.com"
        }
    ],

    // метод для пошуку контакту за ім'ям
    findContact(name) {
        return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    },

    // Додавання нового контакту з перевіркою на дублікат за ім'ям
    addContact(newContact) {
        const duplicate = this.contacts.find(contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase()
        );

        if (duplicate) {
            console.log(`Контакт з ім’ям "${newContact.name}" вже існує.`);
        } else {
            this.contacts.push(newContact);
            console.log(`Контакт ${newContact.name} успішно додано.`);
        }
    }
};


// Пошук контакту
const found = contactBook.findContact("Іван");
console.log(`Знайдено контакт: Ім’я: ${found.name} Телефон: ${found.phone} Email: ${found.email}`);

// Додавання нового контакту
contactBook.addContact({
    name: "Наталя",
    phone: "+380991112233",
    email: "nataliya@example.com"
});

// Додавання нового контакту (дубль)
contactBook.addContact({
    name: "Іван",
    phone: "+380981112233",
    email: "ivan@example.com"
});

console.log("Оновлений список контактів:", contactBook.contacts);