class User {
  constructor(name, surname, year) {
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
    const currentYear = new Date().getFullYear();
    if (currentYear - value > 5) {
      throw new RangeError(`Select [${currentYear - 5}...${currentYear}] year`);
    }
    this._year = value;
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

const student1 = new Student('Alex', 'Smith', 2019);
const student2 = new Student('Emily', 'Blant', 2018);
const student3 = new Student('Emily', 'Blant', 2021);