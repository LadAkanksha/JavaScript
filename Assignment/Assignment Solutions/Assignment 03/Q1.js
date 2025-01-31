/* 
1.Write a program which accept one number from user and print that number of
even numbers on screen.

Input : 7
Output: 2 4 6 8 10 12 14 
*/

function printEven(num){
    if(num <= 0)
    {
        return -1;
    }
    let i = 0, no = 1;
    while(i != num)
    {
        if(no %2 == 0)
        {
            console.log(no);
            i++;
        }
        no++;
    }
}

// let input = prompt("Enter A Number : ");
// printEven(input);

printEven(6);