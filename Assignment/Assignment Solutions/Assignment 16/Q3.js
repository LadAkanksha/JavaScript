/*
3. Accept number of rows and number of columns from user and display below
pattern.

Input : iRow = 3 iCol = 5
Output :
            A A A A A
            B B B B B
            C C C C C
*/

function Pattern(row,col)
{
    for(let i = 0 , ltr = 'A'; i < row ; i++)
    {
        for(let j = 0 ; j < col ; j++)
        {
            document.write(String.fromCharCode(ltr.charCodeAt(0)+i));
        }
        document.write("<br>");
    }
}

let r = parseInt(prompt("Enter number of rows : "));
let c = parseInt(prompt("Enter number of columns : "));

Pattern(r,c);