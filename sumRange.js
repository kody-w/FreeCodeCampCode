function sumAll(arr) {
  
  if(arr[0]<arr[1]){
    
    var numTotal = arr[0];
    
    //console.log(numTotal);
    
    for(i=(numTotal+1);i<=arr[1];i++){
      
    	

      numTotal = numTotal + i;
      console.log(numTotal);
      
      
    }
    
    
  }else{

  	var numTotal = arr[1];
    
    //console.log(numTotal);
    
    for(i=(numTotal+1);i<=arr[0];i++){
      
    	

      numTotal = numTotal + i;
      console.log(numTotal);
      
      
    }

    
    
  }
  
  //console.log(numTotal);
  return numTotal;
}

sumAll([1, 4]);