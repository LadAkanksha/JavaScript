/*
3. Write a program which accept range from user and return addition of all numbers
in between that range. (Range should contains positive numbers only)

Input : 23 30
Output : 212

Input : 10 18 
Output : 126

Input : -10 2
Output : Invalid range

Input : 90 18
Output : Invalid range 
*/

function RangeSum(start,end)
{
    let sum = 0;
    if(start < 0 || end < 0 || start > end)
    {
        console.log("Invalid Range !!!");
        return sum;
    }
    for(let i = start ; i <= end ; i++)
    {
        sum += i;
    }
    return sum;
}


let s = parseInt(prompt("Enter Starting Point : "));
let e = parseInt(prompt("Enter Ending Point : "));

let ans = RangeSum(s,e);
console.log("Addition is ",ans);