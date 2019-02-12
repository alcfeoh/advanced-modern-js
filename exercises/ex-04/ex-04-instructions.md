# Exercise 04

## Objectives
* Improve the code to more efficiently manage configuration data for `logger.colorLog()`
* Do the same to efficiently store all the messages logged by either
  `colorLog()` or `log()`

## Instructions

In `colorLog()`, change where logColors is defined so that it is not recreated every time the method is called.

Create an array that can be accessed by both `log()` and `colorLog()`  
Both `log()` and `colorLog()` should store their messages in this array  
The array should be used to generate the output from both `log()` and `colorLog()`  
(Put another way, replace the local array that `log()` and `colorLog()` each used with 
an array they can both share)

When you are finished, open http://localhost:8080/exercises/ex-04/begin to see if your 
code works.  
Try uncommenting some of the code in main.js to see if it has any effects on your
output. 
