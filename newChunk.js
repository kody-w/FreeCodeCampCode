function chunk(arr, size) {
	bufferArray = [];
	returnArray = [];
	
	j = 0;
	

  for(i = 0; i <= arr.length; i++){
  
	sizeLimit = sizeLimit % size;
  
	if(sizeLimit !== 0)
		bufferArray.push(arr[i]);
		console.log(bufferArray);
		sizeLimit--;
	
  }


  return returnArray;
}

chunk(["a", "b", "c", "d"], 2);

//chunk([0, 1, 2, 3, 4, 5], 4);