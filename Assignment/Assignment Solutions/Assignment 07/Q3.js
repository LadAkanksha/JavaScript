/*
3. Write a program which accept number from user and print its numbers line.

Input : 4
Output : -4 -3 -2 -1 0 1 2 3 4

*/

function Display(num){
    for(let i = -num ; i <= num ; ++i)
    {
        console.log(i);
    }
}

let input = prompt("Enter Any Number : ");
Display(input);