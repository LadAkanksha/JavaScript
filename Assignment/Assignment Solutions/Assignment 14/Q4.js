/*
4. Accept number from user and display below pattern.

Input : 4
Output : # 1 * # 2 * # 3 * # 4 * 

*/

function Pattern(no)
{
    if(no < 0)
    {
        no = -no;
    }
    for(let i = 1 ; i <= no ; i++)
    {
        console.log("# "+i+" *");
    }
}
let value = parseInt(prompt("Enter number of Elements : "));
Pattern(value);