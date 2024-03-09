[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

Answer:
The core calculation for the recursive Fibonacci sequence is that fibArr[i] = fibArr[i - 2] + fibArr[i - 1].
This line ensures that each time the for-loop is called, the value in the index is equal to the sum of the
index two spaces behind and the index one space behind. With this line, the Fibonacci sequence is correctly
calculated for all values.
In the case where there is no indexes behind (index = 0) or only one index behind (index = 1), the program 
uses special if-statements that either return the array when it has only has that one element [0] or when 
the array has only the two elements [0, 1].
The invariant is that we know the two numbers in the Fibonacci sequence that come before the number being 
calculated, so through each iteration of the loop we are able to calculate this next Fibonacci number using 
these previous two known numbers.
