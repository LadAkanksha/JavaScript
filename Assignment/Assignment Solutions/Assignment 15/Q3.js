/*
3. Accept number of rows and number of columns from user and display
below pattern.
Input : iRow = 3 iCol = 5
Output : 5 4 3 2 1
 5 4 3 2 1
 5 4 3 2 1
*/

function Pattern(row,col)
{
    for(let i = 1 ; i <= row ; i++)
    {
        for(let j = col ; j > 0 ; j--)
        {
            document.write(" "+j+" ");
        }
        document.write("<br>");
    }
}
let r = parseInt(prompt("Enter number of rows : "));
let c = parseInt(prompt("Enter number of Columns : "));
Pattern(r,c);