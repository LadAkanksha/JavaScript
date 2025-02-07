/*
5. Write a program which accept number from user and display its table in reverse
order.

Input : 2
Output : 20 18 16 14 12 10 8 6 4 2

Input : 5
Output : 50 45 40 35 30 25 20 15 10 5

Input : -5
Output : 50 45 40 35 30 25 20 15 10 5 

*/

function TableRev(num){
    if(num < 0)
    {
        num = -num;
    }
    for(let i = 10 ; i > 0; --i)
    {
        console.log(i*num);
    }
}

let input = prompt("Enter Number :");
TableRev(input);