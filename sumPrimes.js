/*
Bonfire: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.push()

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.





*/


function sumPrimes(num) {
	
	var primeArray = [];
	var primeSum = 0;
	for(i=2;i<=num;i++){
		primeArray = [];
		for(j = 1; j<i+1; j++){
			if(i % j === 0){
	
			primeArray.push(j);
			console.log(i +" is Prime!")
			}
			
		}
		if(primeArray[1] === i) {
			primeSum = primeSum+i;
		}
		
	}
	
	
	

	console.log(primeSum);
  return primeSum;
}


	//sumPrimes(900);	
	
	//sumPrimes(10);	
	
	sumPrimes(977);
	
	//sumPrimes(976);
	
	//sumPrimes(978);



