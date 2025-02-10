/*
5. Write a program which accept area in square feet and convert it into square
meter. (1 square feet = 0.0929 Square meter) 

Input : 5
Output : 0.464515

Input : 7
Output : 0.650321 
*/

function SquareMeter(area)
{
    return area * 0.0929;
}

let val = prompt("Enter Area in Square Feet : ");
let ans = SquareMeter(val);
console.log(val," Sqaure Feet = ",ans,"Square Meter.");
