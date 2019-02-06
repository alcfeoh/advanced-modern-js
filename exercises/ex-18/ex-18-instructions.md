# Exercise 18

## Objectives
* Change the way we retrieve a list of people
* Persist new Person objects to `localStorage`
* Add functionality to clear local storage

## Instructions
Notice that the code from `index.html` has moved into `main.js`.

### Change the way we retrieve a list of people
In `people.js`, add two new functions:

* `getPeople` should attempt to retrieve an array of people from `localStorage`.  
  * If they are not found, it should use the `defaultPeople` array to provide a 
  list of people instead
  * If they are found, remember that they will be Person **configs**, not Person objects,
  so you will need to call `new Person()` on each one. 
  * Remove `people` from the exports and add `getPeople`
  * Import `getPeople` in main.js
  * Uncomment the first line of the `showButton` event handler

### Persist new `Person` objects to `localStorage`
Still in `people.js`...  
`addPerson` should take a Person config, and turn it into a `Person`. 
  * Then add it to the array returned by `getPeople`.
  * Then serialize that array to `localStorage`.
  * Add `addPerson` to the exports of `people.js` 
  * Import `addPerson` in `main.js`
  
In `main.js`, look at the event handler for submit events on the form. There is now
a `personConfig` object there. Invoke `addPerson`, passing it `personConfig`.

### Add functionality to clear local storage

In `main.js`, there is a handler for the "Clear all people" button which currently
does nothing. Add code to iterate over the keys in `localStorage` and delete all of them. 

