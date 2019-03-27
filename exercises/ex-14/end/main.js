console.log( 'Just a test, for the START of the exercise' );

const button = document.getElementById( 'submit-button' );
const firstNameField = document.getElementById( 'first-name' );
const lastNameField = document.getElementById( 'last-name' );

button.addEventListener('click', () => {
    console.log('You clicked on the not-quite submit button');
});

firstNameField.addEventListener( 'change',
    () => console.log( 'You changed the first name field.' ) );
lastNameField.addEventListener( 'change',
    () => console.log( 'You changed  the last name field.' ) );
