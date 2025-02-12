/*
3.Write a program which accept number from user and count frequency of 2 in it.

Input : 2395
Output : 1

Input : 1018
Output : 0

Input : 9000
Output : 0

Input : 922432
Output : 3 
*/

function CountTwo(num)
{
    if(num < 0)
    {
        num = -num;
    }
    let digit = 0,cnt = 0;
    while(num > 0)
    {
        digit = num % 10;
        if(digit == 2)
        {
            cnt++;
        }
        num = parseInt(num/10);
    }
    return cnt;

}
let val = parseInt(prompt("Enter Number : "));
let ans = CountTwo(val);
console.log(ans);