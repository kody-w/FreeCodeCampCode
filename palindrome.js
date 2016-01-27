/*
Bonfire: Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" 
among others.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.replace()
String.toLowerCase()

palindrome("eye") should return a boolean.
palindrome("eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.

*/


function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/[^A-Za-z0-9]/g, '');
  console.log(str);
  
   var left = 0;
  var right = str.length- 1;
  while (left < right) {
    if (str[left++] !== str[right--]) {
      return false;
    }
  }
  return true;
}


palindrome("eye");

palindrome("My age is 0, 0 si ega ym."); //should return true.

palindrome("almostomla") //should return false.

palindrome("1 eye for of 1 eye.") //should return false.