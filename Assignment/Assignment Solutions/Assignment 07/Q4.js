/*
4. Write a program which accepts N from user and print all odd numbers up to N.

Input : 18
Output : 1 3 5 7 9 11 13

*/

function OddDisplay(num){
    if(num < 0)
        num = -num;

    for(let i = 1 ; i < num ; i++)
        if(i%2 != 0)
        console.log(i);
}

let input = prompt("Enter Any Number : ");
OddDisplay(input);