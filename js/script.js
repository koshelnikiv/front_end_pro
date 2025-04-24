/*
Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:

Поля:

Name - обов'язкове текстове поле
Message - текстове поле не менше 5 символів
Phone number - обов'язкове поле типу phone. З початком на +380
Email - email обов'язково повинен мати @ та крапку
Після відправки, в консоль відображаємо дані, які ввів користувач.

Під час помилки показувати її під полем.
*/

 // Отримуємо саму форму
 const form = document.getElementById("contactForm");

 // Об'єкт з усіма полями, їх елементами, перевірками та повідомленнями про помилки
 const fields = {
   name: {
     element: document.getElementById("name"),
     errorElement: document.getElementById("nameError"),
     validate: value => value.trim() !== "", // Перевірка: не порожнє
     message: "Name is required."
   },
   message: {
     element: document.getElementById("message"),
     errorElement: document.getElementById("messageError"),
     validate: value => value.trim().length >= 5, // Мінімум 5 символів
     message: "Message must be at least 5 characters."
   },
   phone: {
     element: document.getElementById("phone"),
     errorElement: document.getElementById("phoneError"),
     validate: value => /^\+380\d{9}$/.test(value.trim()), // Починається з +380 і 9 цифр
     message: "Phone must start with +380 and contain 9 digits after."
   },
   email: {
     element: document.getElementById("email"),
     errorElement: document.getElementById("emailError"),
     validate: value => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value.trim()), // Має @ і крапку
     message: "Invalid email format."
   }
 };

 // Функція для перевірки окремого поля
 function validateField(fieldKey) {
   const { element, errorElement, validate, message } = fields[fieldKey];
   const value = element.value;
   const isValid = validate(value); // Перевіряємо значення за заданою функцією

   if (!isValid) {
     // Якщо невалідне — показуємо помилку і підсвічуємо червоним
     errorElement.textContent = message;
     element.classList.add("invalid");
     element.classList.remove("valid");
   } else {
     // Якщо валідне — прибираємо помилку і підсвічуємо зеленим
     errorElement.textContent = "";
     element.classList.remove("invalid");
     element.classList.add("valid");
   }

   return isValid;
 }

 // Додаємо live-валідацію: перевірка під час набору
 for (const key in fields) {
   fields[key].element.addEventListener("input", () => validateField(key));
 }

 // Обробка події відправлення форми
 form.addEventListener("submit", function(event) {
   event.preventDefault(); // Зупиняємо стандартну відправку

   let allValid = true;

   // Перевіряємо всі поля
   for (const key in fields) {
     const valid = validateField(key);
     if (!valid) allValid = false;
   }

   // Якщо всі поля валідні — показуємо дані
   if (allValid) {
     const data = {};
     for (const key in fields) {
       data[key] = fields[key].element.value.trim(); // Збираємо значення
     }

     console.log("Повідомлення:", data); // Виводимо в консоль
     form.reset(); // Очищаємо форму

     // Прибираємо підсвітку і помилки після очищення
     for (const key in fields) {
       fields[key].errorElement.textContent = "";
       fields[key].element.classList.remove("invalid", "valid");
     }
   }
 });