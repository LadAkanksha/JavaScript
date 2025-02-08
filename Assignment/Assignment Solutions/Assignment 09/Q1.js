/*

1.Write a program which accept number from user and display below pattern.

Input : 5
Output : * * * * * # # # # #

Input : 6
Output : * * * * * * # # # # # # #

Input : -5
Output : * * * * * # # # # #

Input : 2
Output : * * # # 

*/

function Display(num){
    if(num < 0)
    {
        num = -num;
    }
    for(let i = 1 ; i <= num ; i++)
    {
            console.log(" * ");
    }
    for( let i = num ; i > 0 ; i--)
    {
        console.log(" # ");
    }
}

let input = prompt("Enter Number : ");
Display(input);