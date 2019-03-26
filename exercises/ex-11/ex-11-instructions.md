# Exercise 11

## Objectives
* Refactor our code to create a Person class

## Instructions

Start in the new file `Person.js`. 
Delete the placeholder `peopleFactory` function. We will not need it anymore.  
Create a class called Person.
Add a `constructor` to the class. It should take all parameters to create a person 
(firstName, lastName, gender, birthDate)

If no parameters are passed to the constructor or if some params are missing, use the values from `defaultPerson` instead. 

Generate a new `id` for every single person that gets created.

Finally, go to `main.js`. Remove `personFactory` from the import list for `people`.
Iterate over `people` and print each one out with logger.personLog.



