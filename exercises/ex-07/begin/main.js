console.log( 'Just a test, for the START of the exercise' );

import { defaultPerson } from './people.js';
import { logger } from './utils.js';


  logger.objectLog( defaultPerson );
  logger.log( 'defaultPerson.id: ' + defaultPerson.id );
  const enumerableProps = Object.keys( defaultPerson );
  logger.log( 'Enumerable properties: ' + enumerableProps );
