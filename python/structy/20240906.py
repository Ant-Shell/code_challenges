# https://structy.net/problems/is-prime

'''
Write a function, is_prime, that takes in a number as an argument.

The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7.

For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer.
'''

def is_prime(n):
  if n == 1: return False
  for i in range(2, n):
    if n % i == 0:
      return False
  return True

print(is_prime(4))