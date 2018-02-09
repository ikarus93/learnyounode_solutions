/*  ## BABY STEPS (Exercise 2 of 13)  
   
  Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout).  
   */


const nums = process.argv.slice(2);

console.log(nums.reduce( (a,b) => { return parseInt(a) + parseInt(b);}))