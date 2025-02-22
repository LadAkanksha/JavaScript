/*
5. Accept number of rows and number of columns from user and display below
pattern.
Input : iRow = 4 iCol = 4
Output :
            1 2 3 4 5
            1 2     5
            1   3   5
            1     4 5
            1 2 3 4 5 
*/

function Pattern(row , column)
{
    for(let i = 1 ; i <= row ; i++)
    {
        for(let j = 1 ; j <= column ; j++)
        {
            if(i == j || i==1 || i==row || j==1 || j==column)
            {
                document.write(" "+j+" ");
            }
            else
            {
                document.write(" &nbsp;&nbsp;"); 
            }
        }
        document.write("<br>");
    }
}

let r = parseInt(prompt("Enter Number Of Rows : "));
let c = parseInt(prompt("Enter Number Of Columns : "));

Pattern(r,c);