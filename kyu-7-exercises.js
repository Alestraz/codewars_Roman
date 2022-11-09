/*

DESCRIPTION:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)


MY SOLUTION:


function isIsogram(str){
  
    var i, j;
    str = str.toLowerCase();
    var strLen = str.length;
   
    for(i = 0; i < strLen; i++) {
      for(j = i + 1; j < strLen; j++) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
 }


DESCRIPTION:
Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.


MY SOLUTION:


function toNumberArray(stringarray){
  
  var length = stringarray.length;
  
  var numberArray = [];
  
  for (i = 0; i < length; i++)
    {
      numberArray.push(parseFloat(stringarray[i]));
    }
  return numberArray;

}

DESCRIPTION:
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.


MY SOLUTION:


function swap (string) {

  return Array.from(string).map(item => {    
    if (["a","o","e","u","i"].includes(item)) {
      return item.toUpperCase();
    } else {
        return item;
      }
  }).join('');
}


DESCRIPTION:
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.



MY SOLUTION:


function disemvowel(str) {
  const vowels = ['a','o','e','i','u','A','O','E','I','U'];
  return str.split("").map(letter => vowels.includes(letter) ? 
    letter = '' :
    letter).join('');
}


DESCRIPTION:
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

MY SOLUTION:


// Return an array
function fizzbuzz(n)
{
  if(n>=1) {
    
    let array = [];
    let arrayLength = Number(n);

    for(i = 1; i <= arrayLength; i++) {
      
      if(i % 3 == 0 && i % 5 == 0) {
        array[i-1] = "FizzBuzz";
      } 
      
      else if(i % 3 == 0) {
        array[i-1] = "Fizz";
      }
      
      else if(i % 5 == 0) {
        array[i-1] = "Buzz";
      } 
      
      else {
        array[i-1] = i;
      }
    }
    return array;
  }
}


DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


MY SOLUTION:


function getCount(str) {
  
  const vowels = ['a','o','e','i','u'];
  let vowelCount = 0;
  
  Array
    .from(str)
    .forEach(letter => 
    vowels.includes(letter) ?
    vowelCount++ :
    vowelCount + 0);
    
   return vowelCount;
}
 */