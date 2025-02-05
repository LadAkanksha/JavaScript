/*
5. Write a program which accept total marks & obtained marks from user and
calculate percentage.

Input : 1000 745
 Output : 74.5%
*/

function percentage(tot,mark)
{
    return (mark/tot)*100;
}

let total = prompt("Enter Total Marks : ");
let oMarks = prompt("Enter Obtained Marks : ");
let ans = percentage(total,oMarks);
console.log(ans+" %");