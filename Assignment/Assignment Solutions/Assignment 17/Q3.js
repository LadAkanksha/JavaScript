/*
3. Accept number of rows and number of columns from user and display
below pattern.

Input  : iRow = 5 iCol = 5
Output :
            a b c d e
            1 2 3 4 5
            a b c d e
            1 2 3 4 5
            a b c d e 
*/

function Pattern(row,column)
{
    let ltr = 'a';
    for(let i = 0 ; i < row ; i++)
    {
        for(let j = 0 ; j < column ; j++)
        {
          if(i % 2 == 0)
          {
            document.write(j+1+"&nbsp;");
          }
          else
          {
            document.write(String.fromCharCode(ltr.charCodeAt(0)+j)+"&nbsp;");
          }
        }
        document.write("<br>");
    }
    document.write("<br>");
}

let r = parseInt(prompt("Enter Number of Rows : "));
let c = parseInt(prompt("Enter Number of Columns : "));

Pattern(r,c);