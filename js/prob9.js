/*
# Problem 9
#
# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
# a^2 + b^2 = c^2
#
# For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
#
# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.
*/

var squares = [],
	triplets = [];

function calculate() {
	
	// store all the squares
	// since a < b < c and a + b + c = 1000, max(c) = 997
	for (var i = 1; i < 998; i++) {
		squares.push(i*i);
	}
	
	// find all the triplets for which a^2 + b^2 = c^2
	var len = squares.length;
	for (var i = 1; i < len; i++) {
		for (var j = 0; j < i; j++) {
			var sum = squares[i]+squares[j];
			if (squares.indexOf(sum) > -1) {
				var obj = {
					a: Math.sqrt(squares[j]),
					b: Math.sqrt(squares[i]),
					c: Math.sqrt(sum)
				};
				triplets.push(obj);
			}
		}
	}
	
	len = triplets.length;
	var triplet;
	
	for (var i = 0; i < len; i++) {
		triplet = triplets[i];
		if (triplet.a + triplet.b + triplet.c === 1000) {
			console.log(triplet);
			break;
		}
	}
	
	return triplet.a*triplet.b*triplet.c; //31875000
}