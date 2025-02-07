/*
4.Write a program which accept number from user and display its table.

Input : 2
Output : 2 4 6 8 10 12 14 16 18 20

Input : 5
Output : 5 10 15 20 25 30 35 40 45 50

Input : -5
Output : 5 10 15 20 25 30 35 40 45 50 
*/

function Table(num){
    if(num < 0)
    {
        num = -num;
    }
    for(let i = 1 ; i <= 10 ; i++)
    {
        console.log(i*num);
    }
}

let input = prompt("Enter Number :");
Table(input);