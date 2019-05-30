import { Person } from './Person.js';

const people = [
  new Person('Jenny', 'Sparks', 'female' ,'1995-01-01'),
  new Person( 'Lucas', 'Trent', 'male', '1983-02-12'),
  new Person( 'Jack', 'Hawksmoor', 'male','1974-03-26'),
  new Person( 'Jeroen', 'Thornedike', 'male', '1984-04-07'),
  new Person( 'Angela', 'Cortez', 'female', '1979-05-15'),
  new Person( 'Shen','Li-Min','female', '1990-06-30'),
  new Person( 'Spider', 'Jerusalem', 'male', '1977-07-05'),
  new Person( 'Jakita', 'Wagner', 'female', '1988-08-12'),
  new Person( 'Elijah', 'Snow','male','1968-09-19'),
  new Person( 'Ambrose', 'Chase', 'male', '1993-10-22')
];

export function addPerson(person) {
  let storagePeople = localStorage.getItem('people');
  let allPeople = [];
  if (storagePeople) {
    allPeople = JSON.parse(storagePeople);
  } else {
    allPeople = people;
  }
  allPeople.push(person);
  localStorage.setItem('people', JSON.stringify(allPeople));
}

export function getPeople() {
  let storagePeople = localStorage.getItem('people');
  if (storagePeople) {
    let parsedPeople = JSON.parse(storagePeople);
    parsedPeople = parsedPeople.map(person => new Person(person.firstName, person.lastName, person.gender, person.birthDate));
    return parsedPeople;
  } else {
    return people;
  }
}
