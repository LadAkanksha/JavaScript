/*
3.Write a program which accept number from user and display all its non factors.

Input : 12
Output : 5 7 8 9 10 11

Input : 13
Output : 2 3 4 5 6 7 8 9 10 11 12

Input : 10
Output : 3 4 6 7 8 9 
*/

function NonFact(num){
    if(num < 0)
    {
        return 0;
    }
    for(let i = 1 ; i < num ; ++i)
    {
        if(num % i != 0)
        {
            console.log(i);
        }
    }
}

/*
let num = prompt("Enter a Number : ");
let Ans = NonFact(num);
*/

NonFact(12);
NonFact(13);
NonFact(10);