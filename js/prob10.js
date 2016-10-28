/*
# Problem 10
#
# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
#
# Find the sum of all the primes below two million.
*/

var primes = [2];

// Hacky brute-force solution :(

// Returns whether a number is prime
var isPrime = function (num) {	
	
	// check whether we've already calculated it
	if (primes.indexOf(num) > -1) {
		return true;
	}
	
	// does it have a prime as a factor?
	for (i = 0; i < primes.length; i++) {
		if (num % primes[i] === 0) {
			return false;
		}
	}
	
	// it's not a previously-discovered prime, and no prime factors
	var lower = primes[primes.length - 1],
		upper = Math.floor(num/2);	
	
	for (var i = lower; i < upper; i+=2) {
		if (num % i === 0) {
			return false;
		}
	}
	//console.log('is Prime: ', num);
	return true;
};

function calculate() {
	var sum = 0;
	// first find all the primes below 2 million
	for (var i = 2; i < 2000000; i++) {
		if (isPrime(i)) {
			primes.push(i);
			sum += i;
			console.log(sum);
		}
	}
	
	return sum; // 142913828922 // ugh, this took like 10 minutes. How do we optimize this?
}