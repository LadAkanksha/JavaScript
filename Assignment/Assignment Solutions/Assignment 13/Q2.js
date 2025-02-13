/*
2.Write a program which accept number from user and return the count of odd
digits.

Input : 2395
Output : 3

Input : 1018
Output : 2

Input : -1018
Output : 2

Input : 8462
Output : 0 
*/

function CountOdd(no)
{
    if(no < 0)
    {
        no = -no;
    }
    let digit = 0,cnt = 0;
    while(no > 0)
    {
        digit = no % 10;
        if(digit % 2 != 0)
        {
            cnt++;
        }
        no = parseInt(no / 10);
    }
    return cnt;
}

let val = parseInt(prompt("Enter Number : "));
let ans = CountOdd(val);
console.log(ans);