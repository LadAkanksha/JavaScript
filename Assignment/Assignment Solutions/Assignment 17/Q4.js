/*
4. Accept number of rows and number of columns from user and display
below pattern.
Input : iRow = 5 iCol = 5
Output :
            1 2 3 4 5
            -1 -2 -3 -4 -5
            1 2 3 4 5
            -1 -2 -3 -4 -5
            1 2 3 4 5
*/
function Pattern(row,column)
{
    for(let i = 0 ; i < row ; i++)
    {
        for(let j = 0 ; j < column ; j++)
        {
          if(i % 2 == 0)
          {
            document.write("&nbsp;",j+1,"&nbsp;");
          }
          else
          {
            document.write(-(j+1)+"&nbsp;");
          }
        }
        document.write("<br>");
    }
    document.write("<br>");
}

let r = parseInt(prompt("Enter Number of Rows : "));
let c = parseInt(prompt("Enter Number of Columns : "));

Pattern(r,c);