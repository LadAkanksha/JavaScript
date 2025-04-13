/*
2. Accept number of rows and number of columns from user and display below
pattern.

Input : iRow = 4 iCol = 4
Output :
            A B C D
            a b c d
            A B C D
            a b c d
*/

function Pattern(row,col)
{
    for(let i = 1 ; i <= row ; i++)
    {
        
        if(i % 2 != 0)
        {
            for(let j = 0 ,ltr = 'A'; j < col ; j++)
            {
                console.log(String.fromCharCode(ltr.charCodeAt(0)+j));
            }
        }
        else
        {
            for(let j = 0 , ltr = 'a'; j < col ; j++)
            {
                console.log(String.fromCharCode(ltr.charCodeAt(0)+j));
            }
        }
        document.write("<br>");
    }
}

let r = parseInt(prompt("Enter number of rows : "));
let c = parseInt(prompt("Enter number of columns : "));

Pattern(r,c);