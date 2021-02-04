#!/usr/bin/env python3

def square(x):
    return (x * x)

def average(x, y):
    return ((x + y)/2)

def improve(guess, x):
    return average(guess, (x/guess)

def good_enough(guess, x):
    return (abs(square(guess - x)) < 0.001)

def
