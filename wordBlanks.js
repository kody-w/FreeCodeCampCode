/*

*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "                 ";
    // Your code below this line
  
  result = myAdjective +" "+ myNoun + " " + myVerb + " " + myAdverb ; 
    
  console.log(result);
    // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

wordBlanks("", "", "", "");
