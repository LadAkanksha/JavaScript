/*
1. Accept number of rows and number of columns from user and display below
pattern.
Input : iRow = 4 iCol = 4
Output : 
            A B C D
            A B C D
            A B C D
            A B C D 
*/

function Pattern(row,col)
{
    let letter = 'A';

    for(let i = 1 ; i <= row ; i++)
    {
        for(let j = 0 , ltr = 'A'; j < col ; j++)
        {
            document.write(String.fromCharCode(letter.charCodeAt(0)+j));
        }
        document.write("<br>");
    }
}

let r = parseInt(prompt("Enter number of rows : "));
let c = parseInt(prompt("Enter number of columns : "));

Pattern(r,c);