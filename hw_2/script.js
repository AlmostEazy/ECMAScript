'use strict'

/* Задание 1: "Управление библиотекой книг"

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

// Пример использования класса
const book = new Book("BookName1", "Author1", 123);
book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123" */

/* class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;       
        this.pages = pages;
    }

    correctPageNumber(pages) {
        if (pages <= 0 || pages > 3000 || (pages % 1) !== 0) {
            throw new Error("Вы ввели некорректное число страниц.")
        } else {
            return;
        }
    }

    displayInfo() {
        console.log(`Название произведения: "${this.title}", Автор: ${this.author}, ${this.pages} стр.`);
    }
}

const bookOne = new Book("Мастер и Маргарита", "М.А. Булгаков", 495);
bookOne.correctPageNumber(495);
bookOne.displayInfo();
const bookTwo = new Book("Тихий Дон", "М.А. Шолохов", 3500);
bookTwo.correctPageNumber(3500);
bookTwo.displayInfo(); */

class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        
        if (pages <= 0 || pages > 3000 || !Number.isInteger(pages)) {
            throw new Error("Вы ввели некорректное число страниц.")
        };
        
        this.pages = pages;   
    };

    displayInfo() {
        console.log(`Название произведения: "${this.title}", Автор: ${this.author}, ${this.pages} стр.`);
    };
};

const bookOne = new Book("Мастер и Маргарита", "М.А. Булгаков", 495);
bookOne.displayInfo();
const bookTwo = new Book("Тихий Дон", "М.А. Шолохов", 1600);
bookTwo.displayInfo();

/* Задание 2: "Управление списком студентов"
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте в консоль.

// Пример использования класса
const student = new Student("John Smith", 16, "10th grade");
student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade" */

class Student {
    constructor(name, age, grade) {
        this.name = name;

        if (age <= 0 || age > 150) {
            throw new Error("Не верю!")
        };
        
        this.age = age;
        this.grade = grade;

    };

    displayInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}, Класс: ${this.grade}`);
    };
};

const studentOne = new Student("Иван Иванов", 13, "5 класс");
studentOne.displayInfo();
const studentTwo = new Student("Петр Петров", 17, "11 класс");
studentTwo.displayInfo();
