/*
2. Accept number from user and display below pattern.

Input : 5
Output :5 # 4 # 3 # 2 # 1 # 

*/

function Pattern(no)
{
    if(no < 0)
    {
        no = -no;
    }
    for(let i = no ; i > 0 ; i--)
    {
        console.log(i+" # ");
    }
}
let value = parseInt(prompt("Enter number of Elements : "));
Pattern(value);
