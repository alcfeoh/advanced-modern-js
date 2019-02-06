# Exercise 16

## Objectives
* Validate `birthDate` via a regular expression

## Instructions

Working in `index.html`, note that the `validateDate` function now just returns true.
This is not a good validation routine! Above it, add a variable, `reDate` and populate
it with a regular expression that will detect a date in the form YYYY-MM-DD. 

In `validateDate`, return true if the passed `value` contains exactly `reDate` and false
otherwise. 