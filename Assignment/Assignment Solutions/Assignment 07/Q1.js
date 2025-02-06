/*
1.Write a program which accept number from user and print that number of $ & *
on screen.

Input : 5
Output : $ * $ * $ * $ * $ *

Input : 3
Output : $ * $ * $ *

Input : -3
Output : $ * $ * $ * 
*/

function Pattern(num){
    if(num < 0)
    {
        num = -num;
    }
    for(let i = 0 ; i < num ; i++)
    {
        console.log(" $ * ");
    }
}

let input = prompt("Enter Any Number For Pattern : ");
Pattern(input);