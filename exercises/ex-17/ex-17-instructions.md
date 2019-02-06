# Exercise 17

## Objectives
* Use backreferences to make our date validation better

## Instructions
In `index.html`, our regular expression from the last exercise has some shortcomings:  
* No way to access year, month, and day individually
* No way to validate year, month, and day (so it permits birthDates of 6735-38-99)

Update `reDate` with backreferences which grab the year, month, and day values.  
Have `validateDate` check the backreferences for validity as follows:
* Year should be between 1915 and 2000
* Month should be between 1 and 12
* Day should be between 1 and 31

Return true if all these tests are passed, false otherwise. 