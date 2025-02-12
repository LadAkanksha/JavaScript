/*
4.Write a program which accept number from user and count frequency of 4 in it.

Input : 2395
Output : 0

Input : 1018
Output : 0

Input : 9440
Output : 2

Input : 922432
Output : 1 
*/

function CountFour(num)
{
    if(num < 0)
    {
        num = -num;
    }
    let digit = 0,cnt = 0;
    while(num > 0)
    {
        digit = num % 10;
        if(digit == 4)
        {
            cnt++;
        }
        num = parseInt(num/10);
    }
    return cnt;

}
let val = parseInt(prompt("Enter Number : "));
let ans = CountFour(val);
console.log(ans);