/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()

*/


function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line

  var myTransformingString = "";
  for(i=0;i<codeArr.length;i++){

  	var code = codeArr[i].charCodeAt(0);

  	console.log(code);

  	if(code >= 33 && code <=63){

  		decodedArr[i] = String.fromCharCode(code);
  	}else{

		decodedArr[i] = String.fromCharCode(((code - 65 + 13) % 26 ) + 65);
    
    }
  	

  	if(decodedArr[i]==="-"){

  		decodedArr[i] = " ";


  	}
  
  }
  console.log(decodedArr.join(""));
  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test

rot13("SERR PBQR PNZC");

rot13("SERR CVMMN!"); //should decode to "FREE PIZZA!"
rot13("SERR YBIR?"); //should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); //should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."








