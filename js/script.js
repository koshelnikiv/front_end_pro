function Student(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null); // ще не заповнено
    this.attendanceIndex = 0; // поточна позиція
}

// Отримання віку
Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
};

// Середній бал
Student.prototype.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, val) => acc + val, 0);
    return sum / this.grades.length;
};

// Відвідування — присутній
Student.prototype.present = function () {
    if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex] = true;
        this.attendanceIndex++;
    } else {
        console.warn("Вже заповнено всі 25 занять");
    }
};

// Відвідування — відсутній
Student.prototype.absent = function () {
    if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex] = false;
        this.attendanceIndex++;
    } else {
        console.warn("Вже заповнено всі 25 занять");
    }
};

// Резюме
Student.prototype.summary = function () {
    const avgGrade = this.getAverageGrade();
    const attended = this.attendance.filter(val => val === true).length;
    const totalMarked = this.attendance.filter(val => val !== null).length;
    const attendanceRate = totalMarked > 0 ? attended / totalMarked : 0;

    if (avgGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
    } else if (avgGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще";
    } else {
        return "Редиска!";
    }
};

/*---------------------------------------*/
/*використання*/
const student1 = new Student("Іван", "Петренко", 2000, [95, 92, 100]);
const student2 = new Student("Олена", "Ковальчук", 1999, [85, 80, 87]);
const student3 = new Student("Андрій", "Сидоренко", 2001, [60, 65, 70]);

// Відвідуваність
for (let i = 0; i < 20; i++) student1.present(); // 20 присутніх
for (let i = 0; i < 10; i++) student2.present(); // 10 присутніх
for (let i = 0; i < 10; i++) student2.absent();  // 10 відсутніх
for (let i = 0; i < 5; i++) student3.present();  // 5 присутніх
for (let i = 0; i < 15; i++) student3.absent();  // 15 відсутніх

// Перевірка
console.log(`${student1.firstName} (${student1.getAge()}): ${student1.summary()}`); // Молодець!
console.log(`${student2.firstName} (${student2.getAge()}): ${student2.summary()}`); // Добре, але можна краще
console.log(`${student3.firstName} (${student3.getAge()}): ${student3.summary()}`); // Редиска!