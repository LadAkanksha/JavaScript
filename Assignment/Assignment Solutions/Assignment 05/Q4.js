/*
4.Write a program which accept number from user and return summation of all its
non factors.

Input : 12
Output : 50

Input : 10
Output : 37
*/

function SumNonFact(num)
{
    let Sum = 0;
    if(num < 0)
    {
        return Sum;
    }
    for(let i = 0 ; i < num ; ++i)
    {
        if(num % i != 0)
        {
            Sum += i;
        }
    }
    return Sum;
}

/*
let num = prompt("Enter a Number : ");
let Ans = SumNonFact(num);
*/

console.log(SumNonFact(12));
console.log(SumNonFact(10));
console.log(SumNonFact(6));
