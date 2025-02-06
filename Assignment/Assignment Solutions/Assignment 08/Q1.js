/*
1. Write a program which accept number from user and if number is less than 50
then print small , if it is greater than 50 and less than 100 then print medium, if it is
greater than 100 then print large.
Input : 75
Output : Medium 
*/

function Numbers(num){
    if(num < 50)
        console.log("Small");
    else if(num > 50 && num < 100)
        console.log("Medium");
    else
        console.log("Large");
}

let input = prompt("Enter Number : ");
Numbers(input);