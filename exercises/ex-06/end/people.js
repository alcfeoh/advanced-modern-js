let id = 0;

const defaultPerson = {
  toString: function() {
    return `${this.firstName} ${this.lastName}, born ${this.birthDate}`;
  }
};

Object.defineProperties( defaultPerson, {
  firstName: {
    enumerable: true,
    writable  : false,
    value     : 'Jane'
  },

  lastName : {
    enumerable: true,
    writable  : false,
    value     : 'Doe'
  },
  gender   : {
    enumerable: true,
    value     : 'female'
  },
  birthDate: {
    configurable: true,
    enumerable  : true,
    writable    : true,
    value       : new Date()
  },

  id: {
    enumerable: false,
    value     : ++id
  },

  toString: {
    enumerable: false
  }
} );

export { defaultPerson };