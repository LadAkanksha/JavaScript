/*
1. Accept number of rows and number of columns from user and display
below pattern.

Input : iRow = 4 iCol = 3
Output :    * * *
            * * *
            * * *
            * * * 

*/

function Pattern(row,col)
{
    for(let i = 1 ; i <= row ; i++)
    {
        for(let j = 1 ; j <= col ; j++)
        {
            document.write(" * ");
        }
        document.write("<br>");
    }
}
let r = parseInt(prompt("Enter number of rows : "));
let c = parseInt(prompt("Enter number of Columns : "));
Pattern(r,c);