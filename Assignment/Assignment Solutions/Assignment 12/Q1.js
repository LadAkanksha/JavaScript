/*
1.Write a program which accept number from user and display its digits in reverse
order.

Input : 2395
Output :5
        9
        3
        2

Input : 1018
Output :8
        1
        0
        1

Input : -1018
Output :8
        1
        0
        1 
*/
function DisplayDigit(num)
{   
    let digit = 0;
    let temp = num;
    if(temp < 0)
    {
        temp = -temp;
    }
    while(temp > 0)
    {
        digit = temp % 10;
        console.log(digit);
        temp = parseInt(temp / 10);
    }
}

let no = parseInt(prompt("Enter Number : "));
DisplayDigit(no);