


const defaultPerson = {
  firstName: 'Jane',
  lastName : 'Doe',
  gender   : 'female',
  birthDate: new Date( 1985, 2, 15 ),
};

let id = 0;
const idConfig = {
  enumerable  : false,
  configurable: false
};

const fields = Object.keys( defaultPerson );

class Person {
  constructor( config ) {
    fields.forEach( field => {
      if (field === 'birthDate' && config['_birthDate']) {
        this['_birthDate'] = config['_birthDate'];
      } else if ( config[ field ] ) {
        this[ field ] = config[ field ];
      } else {
        this[ field ] = defaultPerson[ field ];
      }
    } );

    Object.defineProperty( this, '_id', { ...idConfig, value: ++id } );

  }

  get id() {
    return this._id;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate( date ) {
    this._birthDate = date;
  }

  toString() {
    return `${this.firstName} ${this.lastName}, born ${this.birthDate}`;
  }
}

export { Person };