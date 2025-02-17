/*
4. Accept number of rows and number of columns from user and display below
pattern.

Input : iRow = 4 iCol = 5
Output :
            4 4 4 4 4
            3 3 3 3 3
            2 2 2 2 2
            1 1 1 1 1 
*/

function Pattern(row,col)
{
    let letter = 'A';

    for(let i = row ; i > 0 ; i--)
    {
        for(let j = 1 ; j <= col ; j++)
        {
            document.write(i)
        }
        document.write("<br>");
    }
}

let r = parseInt(prompt("Enter number of rows : "));
let c = parseInt(prompt("Enter number of columns : "));

Pattern(r,c);