/*
5. Write a program which returns difference between Even factorial and odd factorial
of given number.

Input : 5
Output : -7 (8 - 15)

Input : -5
Output : -7 (8 - 15)

Input : 10
Output : 2895 (3840 - 945)
*/

function FactorialDiff(num){
    if(num <= 0)
    {
        num = -num;
    }
    let evenFact = 1, oddFact = 1;
    for(let i = 1 ; i <= num ; i++)
    {
        if(i % 2 == 0)
        {
            evenFact *= i;
        }
        else
        {
            oddFact *= i;
        }
    }
    return evenFact - oddFact;
}

let input = prompt("Enter Number : ");
let ans = FactorialDiff(input);
console.log("Even Factorial of Number : ",ans);