console.log( 'Just a test, for the START of the exercise' );

import { logger } from './utils.js';
import { Employee } from './Employee.js';


window.addEventListener( 'DOMContentLoaded', () => {
  const clerk = new Employee( 'Jane','Dulce', '1990-01-30','female', 'clerk', 'accounting' );

  logger.log( 'Employee: ' + clerk );
  logger.log('<br/>');
  logger.personLog( clerk );
} );
