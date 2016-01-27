/*
Bonfire: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.filter()
arr.filter(callback[, thisArg])
*/


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  myNewArray = [];
  
  function isTrueCheck(value) {
	  if(Boolean(value)=== true){
		return value;
	  }
}
  for(i=0;i<arr.length;i++){
	console.log(Boolean(arr[i]));	

	myNewArray = arr.filter(isTrueCheck);
	
  }
  console.log(arr);	
  console.log(myNewArray);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
