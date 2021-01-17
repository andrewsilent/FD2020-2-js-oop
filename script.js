class User {
  constructor(name, surname, year = new Date().getFullYear()) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name of student, {string} expected');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set surname(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Surname of student, {string} expected');
    }
    this._surname = value;
  }

  get surname() {
    return this._surname;
  }

  set year(value) {
    // const currentYear = new Date().getFullYear(); // тут возвращался {number} год, который было удобно сравнивать с вводимым при создании студента {number} годом
    // if (currentYear - value > 5) {
      // throw new RangeError(`Select [${currentYear - 5}...${currentYear}] year`);
    // }
    // this._year = value;
    const currentDate = new Date();
    let inputDate = new Date();
    inputDate.setFullYear(value);
    if (currentDate.getFullYear() - inputDate.getFullYear() > 5) {
      throw new RangeError(`Select [${currentYear - 5}...${currentYear}] year`);
    }
    this._year = new Date(inputDate); // теперь {student.year instanceof Date} будет true - этого и надо было добиться?
  }

  get year() {
    return this._year;
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
    return new Date().getFullYear() - this.year === 0
      ? 1
      : new Date().getFullYear() - this.year;
  }
}
const student = new Student('A', 'B');
const student1 = new Student('Alex', 'Smith', 2019);
const student2 = new Student('Emily', 'Blant', 2018);
const student3 = new Student('Emily', 'Blant', 2021);