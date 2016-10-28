# Problem 4
#
# A palindromic number reads the same both ways.
# The largest palindrome made from the product of two 2-digit numbers
# is 9009 = 91 x 99.
# Find the largest palindrome made from the product of two 3-digit numbers.


largest = 0
term1 = 0
term2 = 0

def isPalindrome(number):
    lst = []
    while number > 0:
        lst.append(number % 10)
        number = number / 10

    # check for equality
    length = len(lst) - 1
    for i in xrange(0,length):
        if lst[i] != lst[length - i]:
            return False
    return True

for i in xrange(100,999):
    for j in xrange(100,999):
        product = i * j
        if isPalindrome(product):
            if product > largest:
                largest = product
                term1 = i
                term2 = j



print "%d x %d" % (term1, term2)
print largest
