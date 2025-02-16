/*
4. Accept number of rows and number of columns from user and display
below pattern.

Input : iRow = 3 iCol = 4
Output :
            * # * #
            * # * #
            * # * # 

*/

function Pattern(row,col)
{
    for(let i = 1 ; i <= row ; i++)
    {
        for(let j = col ; j > 0 ; j--)
        {
            if( j%2 == 0)
            {
                document.write(" # ");
            }
            else
            {
                document.write(" * ");
            }
        }
        document.write("<br>");
    }
}
let r = parseInt(prompt("Enter number of rows : "));
let c = parseInt(prompt("Enter number of Columns : "));
Pattern(r,c);