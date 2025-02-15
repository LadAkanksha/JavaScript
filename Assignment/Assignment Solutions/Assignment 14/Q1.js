/*
1. Accept number from user and display below pattern.

Input : 5
Output : A B C D E 

*/

function Pattern(no)
{
    let ltr = 'A';

    if(no < 0)
    {
        no = -no;
    }
    for(let i = 0 ; i < no ; i++)
    {
        console.log(String.fromCharCode(ltr.charCodeAt(0)+i));
    }
}
let value = parseInt(prompt("Enter number of Elements : "));
Pattern(value);

/*
charCodeAt : Returns the Unicode value of the character at the specified location.
(Mhnjech charCodeAt hi method aaplyala specify kelya index chya chracter chi ASCII value kadhun delete)
*/

/*
fromCharCode : To identify Unicode / Multicode value of the character you want to convert.
(mhnjech fromCharCode() hi method aaplyala milalelya value chi ASCII Anun dete).
*/
