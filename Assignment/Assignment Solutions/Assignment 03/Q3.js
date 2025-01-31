/*
3. Write a program which accept number from user and print even factors of that
number.

Input : 36
Output: 2 6 12 18 
*/

function displayEvenFactor(num)
{
    if(num <= 0)
    {
        return -1;
    }
    for(let i = 0 ; i <= num/2 ; ++i)
    {
        if(num % i == 0)
        {
            if(i % 2 == 0)
            {
                console.log(i);
            }
        }
    }
}
// let input = prompt("Enter A Number : ");
// displayEvenFactor(input);

displayEvenFactor(20);