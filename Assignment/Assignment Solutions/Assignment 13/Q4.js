/*
4.Write a program which accept number from user and return multiplication of all
digits.

Input : 2395
Output : 270

Input : 1018
Output : 8

Input : 9440
Output : 144

Input : 922432
Output : 864 

*/

function MulDigits(no)
{
    if(no < 0)
    {
        no = -no;
    }
    let digit = 0, mult = 1;
    while(no > 0)
    {
        digit = no % 10;
        if(digit != 0)
        {
            mult = mult*digit;
        }
        no = parseInt(no / 10);
    }
    return mult;
}

let val = parseInt(prompt("Enter Number : "));
let ans = MulDigits(val);
console.log(ans);