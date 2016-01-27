/*
Bonfire: Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.push()

chunk(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunk([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunk([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
*/

function chunk(arr, size) {
  // Break it up.
  myBufferArray = [];
  returnArray = [];
  
  j = 0;
  
  for(i = 0; i <= arr.length; i++){
	  
	  j = j % size;

	if(!(typeof arr[i] === 'undefined')){
	myBufferArray.push(arr[i]);
	}
	  //console.log("MyBufferArray: "+ myBufferArray)
	  
	  if(j == size-1 || typeof arr[i] === 'undefined'){
		  
		  returnArray.push(myBufferArray);
		  myBufferArray = [];

	  }
	  j++;
	   
  }
  
  //console.log(returnArray);
  return returnArray;
}

chunk(["a", "b", "c", "d"], 2);

chunk([0, 1, 2, 3, 4, 5], 4);