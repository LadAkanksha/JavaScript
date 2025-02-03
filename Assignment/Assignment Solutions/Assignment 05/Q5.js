/*
5.Write a program which accept number from user and return difference between
summation of all its factors and non factors. 

Input : 12
Output : -34 (16 - 50)

Input : 10
Output : -29 (8 - 37) 
*/

function FactDiff(num)
{
    if(num < 0)
    {
        return 0;
    }
    let factSum = 0 , nonFactSum = 0;

    for(let i = 1 ; i < num ; ++i)
    {
        if(num % i == 0)
        {
            factSum += i;
        }
        else
            nonFactSum += i;
    }
    return factSum - nonFactSum;
}

console.log(FactDiff(12));
console.log(FactDiff(10));
console.log(FactDiff(0));