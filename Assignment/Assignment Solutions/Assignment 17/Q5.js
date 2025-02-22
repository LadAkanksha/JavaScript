/*
5. Accept number of rows and number of columns from user and display
below pattern.
Input : iRow = 4 iCol = 4
Output :
            1 2 3 4
            2 3 4 5
            3 4 5 6
            4 5 6 7
*/

function Pattern(row,column)
{
    for(let i = 1 , num = 1; i <= row ; i++,num++)
    {
        for(let j = i ; j < column+i ; j++)
        {
            document.write(j+"&nbsp;");
        }
        document.write("<br>");
    }
    document.write("<br>");
}

let r = parseInt(prompt("Enter Number of Rows : "));
let c = parseInt(prompt("Enter Number of Columns : "));

Pattern(r,c);