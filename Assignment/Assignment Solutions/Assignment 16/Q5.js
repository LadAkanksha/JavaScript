/*
5. Accept number of rows and number of columns from user and display below
pattern.

Input : iRow = 3 iCol = 4
Output :
            1 2 3 4
            5 6 7 8
            9 10 11 12
*/

function Pattern(row,col)
{
    let num = 1 ;
    for(let i = 1 ; i <= row ; i++)
    {
        for(let j = 1 ; j <= col ; j++)
        {
            document.write(" ",num," ");
            num++;
        }
        document.write("<br>");
    }
}

let r = parseInt(prompt("Enter number of rows : "));
let c = parseInt(prompt("Enter number of columns : "));

Pattern(r,c);