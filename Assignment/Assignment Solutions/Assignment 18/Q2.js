/*
2. Accept number of rows and number of columns from user and display below
pattern.

Input : iRow = 4 iCol = 4
Output :
            * * * *
            * * * #
            * * # #
            * # # # 
*/

function Pattern(size)
{

    for(let i = 1 ; i <= size ; i++)
    {
        for(let j = 1 ; j <= size ; j++)
        {
            if( i+j <= size+1)
            {
                document.write(" * ");
            }
            else
            {
                document.write(" # ");
            }
        }
        document.write("<br>");
    }
}

let size = parseInt(prompt("Enter Size for Pattern : "));

Pattern(size);