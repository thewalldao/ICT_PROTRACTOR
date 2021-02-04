import sys
print(sys.getrecursionlimit())

sys.setrecursionlimit(5000)

def square(x):
    return (x * x)

def average(x, y):
    return ((x + y)/2)

def improve(guess, x):
    return average(guess, (x/guess))

def good_enough(guess, x):
    return (abs(square(guess - x)) < 0.001)

def sqrt_iter(guess, x):
    if good_enough(guess , x):
        return guess
    sqrt_iter(improve(guess, x), x)

def sqrt(x):
    (sqrt_iter(1.0, x))

print(sqrt(2))
