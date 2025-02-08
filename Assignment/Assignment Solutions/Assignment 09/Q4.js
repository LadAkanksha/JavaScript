/*
4. Write a program to find odd factorial of given number.

Input : 5
Output : 15 (5 * 3 * 1)

Input : -5
Output : 15 (5 * 3 * 1)

Input : 10
Output : 945 (9 * 7 * 5 * 3 * 1)
*/

function OddFactorial(num){
    if(num <= 0 )
    {
        num = -num;
    }
    let fact = 1;
    for(let i = num ; i > 0 ; i--)
    {
        if( i % 2 != 0)
        {
            fact *= i;
        }
    }
    return fact;
}

let input = prompt("Enter Number : ");
let ans = OddFactorial(input);
console.log("Even Factorial of Number : ",ans);