/*
2. Accept number of rows and number of columns from user and display
below pattern.

Input : iRow = 4 iCol = 4
Output :
            2 4 6 8 10
            1 3 5 7 9
            2 4 6 8 10
            1 3 5 7 9 
*/

function Pattern(row,column)
{
    for(let i = 1 ; i <= row;i++)
    {
            if(i % 2 == 0)
            {
                for(let j = 1 , num = 1; j <= column;j++)
                {
                    document.write(" ",num," ");
                    num = num+2;
                }
            }
            else
            {
                for(let j = 1, num = 2 ; j <= column;j++)
                {
                     document.write(" ",num," ");
                     num = num + 2;
                }
            }
        document.write("<br>");
    }
}

let r = parseInt(prompt("Enter Number of Rows : "));
let c = parseInt(prompt("Enter Number of Columns : "));

Pattern(r,c);