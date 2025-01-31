/*
2. Write a program which accept number from user and print even factors of that
number.

Input : 24
Output: 1 2 4 6 8 12
*/

function dispalyFactor(num){
    if(num <= 0)
    {
        return -1;
    }
    for(let i = 0 ; i <= num/2 ;++i)
    {
        if(num % i == 0)
        {
            console.log(i);
        }
    }
}

// let input = prompt("Enter A Number : ");
// displayFactor(input);

dispalyFactor(24);