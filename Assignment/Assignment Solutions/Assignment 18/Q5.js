/*
5. Accept number of rows and number of columns from user and display below
pattern.

Input : iRow = 4 iCol = 4
Output :
        1 2 3 4
        1 * * 4
        1 * * 4
        1 2 3 4
*/

function Pattern(row,col)
{
    let num = 0 ;
    for(let i = 1 ; i <= row ; i++)
    {
        for(let j = 1 ,num = 1; j <= col ; j++)
        {
            if( i==1 || i==row || j==1 || j==col)
            {
                document.write(" "+num+" ");
            }
            else
            {
                document.write(" * ");
            }
            num++;
        }
        document.write("<br>");
    }
}



let r = parseInt(prompt("Enter number of rows : "));
let c = parseInt(prompt("Enter number of columns : "));

Pattern(r,c);