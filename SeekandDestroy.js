/*
Bonfire: Seek and Destroy
You will be provided with an initial array (the first argument in the 
destroyer function), followed by one or more arguments. Remove all elements
from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.filter()

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

function checkList(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

*/

function destroyer(arr) {
  // Remove all the values
	console.log(arguments.length);
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
	
	var numArray = arguments[0];
	
	for(i=arguments[0].length;i>=0;i--){
		
		console.log("i:"+i);
		
		
		for(j=arguments.length;j>=0;j--){
			console.log("\tj:"+j);
			
			if(numArray[i] === arguments[j]){
				
				numArray.splice(i, 1);
				
			}
			
			
		}
	}
  console.log(numArray);
  
 
  return numArray;
}
// destroyer([3, 5, 1, 2, 2], 2, 3, 5); //should return [1].
destroyer([2, 3, 2, 3], 2, 3); //should return [].
//destroyer([1, 2, 3, 1, 2, 3], 2, 3);
