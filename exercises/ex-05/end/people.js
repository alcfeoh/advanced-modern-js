const defaultPerson = {
  firstName: 'Jane',
  lastName : 'Doe',
  gender   : 'female',
  birthDate: new Date( 1985, 2, 15 ),
  toString : function() {
    return `${this.firstName} ${this.lastName}, born ${this.birthDate}`;
  }
};

const personFactory = () => ( { ...defaultPerson } );

export { defaultPerson, personFactory };
