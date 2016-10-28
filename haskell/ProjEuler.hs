

{- Project Euler problems -}

-- Problem 1: Find the sum of all the multiples of 3 or 5 below 1000.
find_sum :: Integer
find_sum = sum_of_multiples 0 0

sum_of_multiples :: Integer -> Integer -> Integer
sum_of_multiples sum 1000 = sum
sum_of_multiples sum count
					| (((count `mod` 3) == 0) || ((count `mod` 5) == 0)) = sum_of_multiples (sum + count) (count + 1)
					| otherwise = sum_of_multiples sum (count + 1)
					

-- Problem 2: Find the sum of all the even-valued terms in the 
-- Fibonacci sequence which do not exceed four million.
find_fib_sum :: Integer
find_fib_sum = sum_even_fibs 0 1 1

sum_even_fibs :: Integer -> Integer -> Integer -> Integer
sum_even_fibs sum curr prev
                    | (curr > 4000000) = if ((prev `mod` 2) == 0) then (sum + prev) else sum
                    | ((prev `mod` 2) == 0) =  sum_even_fibs (sum + prev) (curr + prev) curr
					| otherwise = sum_even_fibs sum (curr + prev) curr
					

-- Problem 3: What is the largest prime factor of the number 600851475143?
largestPrime :: Integer -> Integer
largestPrime x = calcPrime x 1 1

isPrime :: Integer -> Integer -> Bool
isPrime x factor
            | (factor >= x/2) = True
			| (factor < x/2) = ((x / factor) /= 0)

calcPrime :: Integer -> Integer -> Integer -> Integer
calcPrime x factor largest
            | (factor >= x/2) = largest
            | (factor < x/2) = ((x `mod` factor) /= 0) && calcPrime x (factor + 1) largest