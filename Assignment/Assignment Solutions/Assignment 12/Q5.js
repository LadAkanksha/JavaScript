/*
5.Write a program which accept number from user and count frequency of such a
digits which are less than 6.

Input : 2395
Output : 3

Input : 1018
Output : 3

Input : 9440
Output : 3

Input : 96672
Output : 1 
*/

function Count(num)
{
    if(num < 0)
    {
        num = -num;
    }
    let digit = 0,cnt = 0;
    while(num > 0)
    {
        digit = num % 10;
        if(digit < 6)
        {
            cnt++;
        }
        num = parseInt(num/10);
    }
    return cnt;

}
let val = parseInt(prompt("Enter Number : "));
let ans = Count(val);
console.log(ans);