/*
5.Write a program which accept number from user and return difference between
summation of even digits and summation of odd digits.

Input : 2395
Output : -15 (2 - 17)

Input : 1018
Output : 6 (8 - 2)

Input : 8440
Output : 16 (16 - 0)

Input : 5733
Output : -18 (0 - 18) 
*/

function CountDiff(no)
{
    let dig = 0, esum = 0 , osum = 0;

    if(no < 0)
    {
        no = -no;
    }
    while(no > 0)
    {
        dig = no % 10;
        if(dig % 2 == 0)
            esum += dig;
        else
            osum += dig;

        no = parseInt(no / 10);
    }
    return esum - osum;
}

let val = prompt("Enter Number : ");
let res = CountDiff(val);
console.log(res);