class User {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;

  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname, year);
  }
  getCourse() {
    return Date().getFullYear() - this.year === 0
      ? 1
      : new Date().getFullYear() - this.year;
  }
}

const student1 = new Student('Alex', 'Smith', 2019);
const student2 = new Student('Emily', 'Blant', 2018);
const student3 = new Student('Emily', 'Blant', 2021);
