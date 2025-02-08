/*
3.Write a program to find even factorial of given number.
Input : 5
Output : 8 (4 * 2)
Input : -5
Output : 8 (4 * 2)
Input : 10
Output : 3840 (10 * 8 * 6 * 4 * 2)
*/

function EvenFactorial(num){
    let fact = 1;
    if( num <= 0 )
    {
        num = -num;
    }
    for(let i = num ; i > 0 ; i--)
    {
        if(i % 2 == 0 )
        {
            fact *= i;
        }
    }
    return fact;
}

let input = prompt("Enter Number : ");
let ans = EvenFactorial(input);
console.log("Even Factorial of Number : ",ans);