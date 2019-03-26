

const defaultPerson = {
  firstName: 'Jane',
  lastName : 'Doe',
  gender   : 'female',
  birthDate: new Date( 1985, 2, 15 ),
};

let id = 0;

class Person {

  constructor(firstName = defaultPerson.firstName,
              lastName = defaultPerson.lastName,
              gender = defaultPerson.gender,
              birthDate = defaultPerson.birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthDate = birthDate;
    this.id = id++;
  }

  getBirthDate() {
    return this.birthDate;
  }

  toString() {
    return `${this.firstName} ${this.lastName}, born ${this.getBirthDate()}`;
  }
}

export { Person };