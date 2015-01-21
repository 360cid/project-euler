# Problem 5
#
# 2520 is the smallest number that can be divided by
# each of the numbers from 1 to 10 without any remainder.
#
# What is the smallest positive number that is evenly divisible (with no remainder)
# by all of the numbers from 1 to 20?

# factors of 20: 2,4,5,10
# factors of 18: 2,3,6,9
# factors of 16: 2,4,8
# factors of 15: 3,5
# factors of 14: 2,7
# --> we only need to consider the values 11 - 20, since everything below is
# already in the factors of these numbers

def hasAllFactors(number):
    for val in xrange(11,20):
        if number % val != 0:
            return False
    return True

smallest = 0
startValue = 20 * 19

while smallest < 1:
    if hasAllFactors(startValue):
        smallest = startValue
    else:
        startValue += 20 * 19 # 20 and 19 have no factors in common

print smallest

# Question - if two numbers with no factors in common are themselves both
# factors of the same number, will their product always be a factor of
# that number?
# i.e. if x and y are factors of m, is xy also always a factor of m?
# Sounds like an induction proof :)

