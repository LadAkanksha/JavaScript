/*
5. Accept number from user and display below pattern.

Input : 8
Output : 2 4 6 8 10 12 14 16 

*/

function Pattern(no)
{
    if(no < 0)
    {
        no = -no;
    }
    let i = 0;
    while(no > 0)
    {
        i = i + 2;
        console.log(i);
        no--;
    }
}
let value = parseInt(prompt("Enter number of Elements : "));
Pattern(value);