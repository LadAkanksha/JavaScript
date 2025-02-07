/*
3.Write a program to find factorial of given number.

Input : 5
Output : 120 (5 * 4 * 3 * 2 * 1)

Input : -5
Output : 120 (5 * 4 * 3 * 2 * 1)

Input : 4
Output : 24 (4 * 3 * 2 * 1)
*/

function Factorial(num)
{
    if(num < 0)
    {
        num = - num;
    }
    let fact = 1;
    for(let i = num ; i > 0 ; --i)
    {
        fact *= i;
    }
    return fact;
}

let no = prompt("Enter Number : ");

console.log(Factorial(no));