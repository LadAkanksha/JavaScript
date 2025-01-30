/*  4. Accept two numbers from user and display first number in second
number of times.

Input : 12 5
Output : 12 12 12 12 12

Input : -2 3
Output : -2 -2 -2

Input : 21 -3
Output : 21 21 21
*/

function Display(num,rep)
{
    for(let i = rep ; i > 0 ; --i)
    {
        console.log(num);
    }
}


    // let Num = prompt("Enter a Number : ");
    // let Freq = prompt("Enter Frequency : ");
    // Display(Num,Freq);


Display(10001,3);