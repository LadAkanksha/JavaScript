/*
5. Write a program which accept N and print first 5 multiples of N.

Input : 4
Output : 4 8 12 16 20 
*/

function MultipleDisplay(num)
{
    if(num < 0)
        num = -num;

    for(let i = 1 ; i <= 5 ; i++)
    {
        console.log(num*i);
    }
}

let input = prompt("Enter Any Number : ");
MultipleDisplay(input);