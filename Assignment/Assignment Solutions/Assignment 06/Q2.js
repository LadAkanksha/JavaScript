/*
2. Write a program which accept one number from user and check whether that
number is greater than 100 or not.

Input : 101
 Output : Greater

 Input : 39
 Output : Smaller 
*/

function ChkGreater(num)
{
    if(num > 100)
    {
        console.log("Greater")
    }
    else if(num < 100)
    {
        console.log("Smaller");
    }
    else if(num == 100)
    {
        console.log("Equal");
    }
}

let input = prompt("Please Enter Number : ");
ChkGreater(input);