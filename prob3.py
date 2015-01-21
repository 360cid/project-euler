# project euler problem 3:
# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?



# determine whether number is prime
def isPrime(number):
    for i in xrange(2,number/2):
        if number % i == 0:
            # print "%d is a factor of %d" % (i,number)
            return False
    return True


def largestPrimeFactor(number):
    upperBound = number
    startValue = number
    i = 2
    largest = 0
    while i < upperBound:    
        if startValue % i == 0:
            upperBound = startValue / i # no need to calculate past here if it's a factor
            if isPrime(i):
                print "%d" % i
                largest = i
                # primes.append(i)
        i = i + 1
    return largest

# print largestPrimeFactor(600851475143)
