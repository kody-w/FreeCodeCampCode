function chunk(arr, size) {
  // Break it up.
  myBufferArray = [];
  returnArray = [];
  
  j = 0;
  
  for(i = 0; i < arr.length; i++){
	  j = j % size ;
	
	  myBufferArray.push(arr[i]);
	
	 // console.log("MyBufferArray: "+ myBufferArray);
	  
  if(j === size - 1){
		  
		  returnArray.push(myBufferArray);
		  console.log("returnArray: "+ returnArray);
		  console.log("MyBufferArray: "+ myBufferArray);
		  myBufferArray = [];

	  }
	  j++;  
  }
  if(myBufferArray !== null){
  returnArray.push(myBufferArray);
  }
  
  for(i = 0; i < returnArray.length; i++){
	  
	  if(returnArray[i].length === 0){
		  console.log(returnArray[i] +"at position "+i+" is null")
		  
		  returnArray.splice(i, 1);
	  }
	  
  }
  
  console.log(returnArray);
  return returnArray;
}


chunk(["a", "b", "c", "d"], 2);

chunk([0, 1, 2, 3, 4, 5], 4);