/*
2.Write a program which accept number from user and check whether it contains 0
in it or not.

Input : 2395
Output : There is no Zero

Input : 1018
Output : It Contains Zero

Input : 9000
Output : It Contains Zero

Input : 10687
Output : It Contains Zero
*/

function ChkZero(num)
{
    if(num < 0)
    {
        num = -num;
    }
    let digit = 0;
    while(num > 0)
    {
        digit = num % 10;
        if(digit == 0)
        {
            return true;
        }
        num = parseInt(num / 10);
    }
    return false;
}

let val = parseInt(prompt("Enter Number : "));
let ans = ChkZero(val);

if(ans == true)
{
    console.log("It Contains Zero.");
}
else
{
    console.log("There Is No Zero");
}