/*
Bonfire: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the 
original arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].


["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]
 should return ["diorite", "pink wool"].
 
 
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

*/


function diff(arr1, arr2) {
  var newArr = [];
  
  for(i=0;i<arr1.length;i++){
	  
	   
	   if(arr2.indexOf(arr1[i])===-1){
		   
		    console.log(arr1[i]);
			
			var newArr = newArr.concat(arr1[i]);
	   } 
  }
  
  for(i=0;i<arr2.length;i++){
	   
	   
	    if(arr1.indexOf(arr2[i])===-1){
		    console.log(arr2[i]);
			var newArr = newArr.concat(arr2[i]);
		   
	   } 
  }


  
  console.log(newArr);
  
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);