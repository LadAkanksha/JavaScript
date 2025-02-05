/*
2.Write a program which accept number from user and print numbers till that
number.

Input : 8
Output : 1 2 3 4 5 6 7 8 
*/

function Display(num){
    if(num < 0)
        num = -num;
    for(let i = 1 ; i <= num ; ++i)
    {
        console.log(i);
    }
}

let input = prompt("Enter Any Number For Pattern : ");
Display(input);