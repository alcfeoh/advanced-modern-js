import { Person } from './Person.js';

let employeeId = 0;
const idConfig = {
  enumerable  : false,
  configurable: false
};

const fields = [ 'department', 'jobTitle' ];

class Employee extends Person {

  constructor( firstName, lastName, gender, birthDate, jobTitle, department ) {
    super( firstName, lastName, gender, birthDate );
    this.jobTitle = jobTitle;
    this.department = department;
    Object.defineProperty( this, '_employeeId',
      { ...idConfig, value: ++employeeId } );
  }

  toString() {
    return `${this.firstName} ${this.lastName} is employed as a ${this.jobTitle}` +
           ` in the ${this.department} department`;
  }
}

export { Employee };
