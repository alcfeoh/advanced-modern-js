console.log( 'Just a test, for the START of the exercise' );

import { logger } from './utils.js';
import { addPerson, getPeople } from './People.js';

const form = document.getElementById( 'new-person-form' );
const showButton = document.getElementById( 'show-all-button' );
const deleteButton = document.getElementById( 'delete-all-button' );
const firstNameField = document.getElementById( 'first-name' );
const lastNameField = document.getElementById( 'last-name' );
const birthDateField = document.getElementById( 'birth-date' );

let isValidDate = false;

const reDate = /^(\d{4})-(\d\d)-(\d\d)$/;

function validateDate( value ) {
  const [ fullMatch, year, month, day ] = reDate.exec( value );
  return fullMatch.length > 0 &&
         year >= 1915 &&
         year <= 2000 &&
         month >= 1 &&
         month <= 12 &&
         day >= 1 &&
         day <= 31;
}

form.addEventListener( 'submit', event => {
  if ( !isValidDate ) {
    console.log( 'The birth date is not valid. Please re-enter.' );
    event.preventDefault();
    return false;
  } else {
    const personConfig = {
      firstName: firstNameField.value,
      lastName : lastNameField.value,
      birthDate: birthDateField.value,
      gender   : document.querySelectorAll( 'input[name=gender]:checked' )[ 0 ].value
    };

    addPerson( personConfig );

    console.log( 'Saved a new person ' );
    event.preventDefault();
    return false;
  }
} );

showButton.addEventListener( 'click', () => {
  let people = getPeople();
  const output = document.getElementById( 'output' );
  let outputHTML = '<ul>';
  people.forEach( person => {
    outputHTML += `<li>${person.toString()}</li>`;
  } );
  outputHTML += '</ul>';

  output.innerHTML = outputHTML;
} );

deleteButton.addEventListener( 'click', () => {
  const length = localStorage.length;
  for ( let x = 0; x < length; x++ ) {
    let key = localStorage.key( x );
    localStorage.removeItem( key );
  }
} );

birthDateField.addEventListener( 'change', event => {
  isValidDate = validateDate( event.target.value );
} );

firstNameField.addEventListener( 'click',
  () => console.log( 'You clicked in the ' +
                     'first name field.' ) );
lastNameField.addEventListener( 'click',
  () => console.log( 'You clicked in the ' +
                     'last name field.' ) );

