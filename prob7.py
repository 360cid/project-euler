# Problem 7
#
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
# we can see that the 6th prime is 13.
#
# What is the 10,001st prime number?

from prob3 import isPrime

primes = [2,3,5,7,11,13]

def xthPrime(place):
    num = 14
    while len(primes) < place:
        if isPrime(num):
            primes.append(num)
        num += 1
    return primes[place-1]

print xthPrime(10001)
