/*
5. Accept number of rows and number of columns from user and display
below pattern.

Input : iRow = 3 iCol = 4
Output :
            1 1 1 1
            2 2 2 2
            3 3 3 3
            4 4 4 4
*/

function Pattern(row,col)
{
    for(let i = 1 ; i <= row ; i++)
    {
        for(let j = 1 ; j <= col ; j++)
        {
                document.write(i);
        }
        document.write("<br>");
    }
}
let r = parseInt(prompt("Enter number of rows : "));
let c = parseInt(prompt("Enter number of Columns : "));
Pattern(r,c);