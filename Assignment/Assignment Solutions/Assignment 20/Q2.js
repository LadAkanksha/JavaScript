/*
2. Accept number of rows and number of columns from user and display below
pattern.
Input : iRow = 4 iCol = 4
Output :
            * * * #
            * * # @
            * # @ @
            # @ @ @ 
*/

function Pattern(row , column)
{
    for(let i = 1 ; i <= row ; i++)
    {
        for(let j = 1 ; j <= column ; j++)
        {
            if(i + j == column+1)
            {
                document.write(" # ");
            }
            else if(i+j <= column+1)
            {
                document.write(" * ");
            }
            else
            {
                document.write(" @ "); 
            }
        }
        document.write("<br>");
    }
}

let r = parseInt(prompt("Enter Number Of Rows : "));
let c = parseInt(prompt("Enter Number Of Columns : "));

Pattern(r,c);