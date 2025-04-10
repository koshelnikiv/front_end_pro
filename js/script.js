// Створення об'єкта користувача
const user = {
    name: "Іван",
    age: 39,
    location: "Дніпро",
  
    // Метод для відображення інформації про користувача
    getInfo: function () {
      console.log(`Ім'я: ${this.name} Вік: ${this.age} Місце проживання: ${this.location}`);
    }
  };
  
  // Виклик методу
  user.getInfo();