// Placeholder for a Person class


const personFactory = () => {
  // This is a dummy function and you can remove it as part of the exercise.
};

const defaultPerson = {
  firstName: 'Jane',
  lastName : 'Doe',
  gender   : 'female',
  birthDate: new Date( 1985, 2, 15 ),
  toString : function() {
    return `${this.firstName} ${this.lastName}, born  ${this.birthDate}`;
  }
};

let id = 0;
const idConfig = {
  enumerable  : false,
  writable    : false,
  configurable: false
};

const fields = Object.keys( defaultPerson );

export { personFactory };