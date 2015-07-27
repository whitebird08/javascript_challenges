//Define a function called sum that takes two numbers as arguments and returns their sum.
function sum(x,y){
  return (x + y);
};
sum(1,2);

//Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
function isEqual(x,y){
return (x === y) 
};
isEqual(1,2)
//Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
function discountPercentage(originalAmount, discountPercentage){

var totalDiscount = originalAmount * (discountPercentage * 0.01)

  if (discountPercentage * 1.00 >= 100 || discountPercentage * 1.00 <= 0) {
    return alert("out of range") 
 } else {

  return ("Your total discount is $" + totalDiscount)}
};

//Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.

??????????????????????????????????????
  function stringCapitalize(str){
   
    for(i=0; i < str.length; i++); {
  var newArray = str.split(" ")
  console.log(str)
}
    for(i=0; i < newArray.length; i++);

  if (newArray){
    newArray.charAt[0].toUpperCase()
  } else {
    newArray.charAt[1].toLowerCase()
  }
  console.log(newArray.join)
  };
???????????????????????????
/*
var inputtoarray = input.split(" ");
var output =[];
for i< inputtoarray
  inputroarray[i];
+ currentstring.slice()

var output = [];
output.push
*/
----



//Define a function called evenNumbers that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.

function evenNumbers (){
  var integer = Math.floor(Math.random()*100);
  for(i=0; i < integer; i++)
  Math.random > 
  
  return even

???????????????

};


//Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.
function isDivisible(){
a/b ===Math.floor(a/b);
};
isDivisible(10,5);


//nuber1 % number2 === 0

//Bonus: Write a function called oddNumbers that takes a random integer, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
function oddNumbers
