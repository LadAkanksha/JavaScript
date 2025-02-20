/*
3. Accept number of rows and number of columns from user and display below
pattern.

Input : iRow = 5 iCol = 5
Output :
            $ * * * *
            # $ * * *
            # # $ * *
            # # # $ *
            # # # # $ 
*/

function Pattern(row , column)
{
    for(let i = 1 ; i <= row ; i++)
    {
        for(let j = 1 ; j <= column ; j++)
        {
            if(i > j)
            {
                document.write(" # ");
            }
            else if(i == j)
            {
                document.write(" $ ");
            }
            else
            {
                document.write(" * ");
            }
        }
        document.write("<br>");
    }
}

let r = parseInt(prompt("Enter Number Of Rows : "));
let c = parseInt(prompt("Enter Number Of Columns : "));

Pattern(r,c);