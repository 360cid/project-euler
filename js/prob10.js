/*
# Problem 10
#
# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
#
# Find the sum of all the primes below two million.
*/

// Sieve of Eratosthenes
// Returns an array of all primes < num
var sieve = function (num) {
    // Seed the list to start
    this._list = [];
    for (var i = 2; i <= num; i++) {
        this._list.push(i);
    }
    
    var lower = 0;
    var upper = Math.floor(Math.sqrt(num));  
    
    // traverse the list
    for (var i = 0; i < upper; i++) {
        lower = this._list[i]; // grab the lowest (possible) prime
        
        if (this._list[i]) {
            for (var j=i+1; j < num; j++){
                if (this._list[j] % lower === 0) {
                    this._list[j] = false; // cross it out
                }
            }
        }
        
    }
    
    var primes = [];
    this._list.map(function(val){
        if (val) {
            primes.push(val);
        }
    });
    
    return primes;
};


function calculate(num) {
    
	// first find all the primes below 2 million
    var primes = sieve(num);
    
    var sum = 0;
    
    primes.map(function(val){
        sum += val;       
    });
	
	return sum; // 142913828922
}