/*
    2.Write a program which accept number from user and display its factors in
decreasing order.

Input : 12
Output : 6 4 3 2 1

Input : 13
Output : 1

Input : 10
Output : 5 2 1 
*/

function FactRev(num){
    if(num <= 0 )
    {
        return 0;
    }
    for(let i = num/2; i > 0 ; --i)
    {
        if(num % i == 0)
        {
            console.log(i);
        }
    }
}
/*
let num = prompt("Enter a Number : ");
let Ans = FactRev(num);
*/
FactRev(12);
FactRev(13);
FactRev(10);