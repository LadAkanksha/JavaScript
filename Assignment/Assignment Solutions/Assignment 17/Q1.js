/*
1. Accept number of rows and number of columns from user and display
below pattern.

Input : iRow = 4 iCol = 4
Output :
            1 2 3 4
            5 6 7 8
            9 1 2 3
            4 5 6 7 
*/

function Pattern(row,column)
{
    for(let i = 1 , n = 1; i <= row;i++)
    {
        for(let j = 1 ; j <= column;j++)
        {
            document.write(" ",n," ");
            n++;
            if(n > 9)
            {
                n = 1;
            }
        }
        document.write("<br>");
    }
}

let r = parseInt(prompt("Enter Number of Rows : "));
let c = parseInt(prompt("Enter Number of Columns : "));

Pattern(r,c);