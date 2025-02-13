/*
3.Write a program which accept number from user and return the count of digits in
between 3 and 7.

Input : 2395
Output : 1

Input : 1018
Output : 0

Input : 4521 
Output : 2

Input : 9922
Output : 0 
*/

function CountRange(no)
{
    if(no < 0)
    {
        no = -no;
    }
    let digit = 0,cnt = 0;
    while(no > 0)
    {
        digit = no % 10;
        if(digit >= 3 && digit <= 7)
        {
            cnt++;
        }
        no = parseInt(no / 10);
    }
    return cnt;
}

let val = parseInt(prompt("Enter Number : "));
let ans = CountRange(val);
console.log(ans);