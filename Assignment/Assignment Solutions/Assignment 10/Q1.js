/*
1.Write a program which accept radius of circle from user and calculate its area.
Consider value of PI as 3.14. (Area = PI * Radius * Radius)

Input : 5.3
Output : 88.2026

Input : 10.4
Output : 339.6224 
*/

function CircleArea(num)
{
    const PI = 3.14;
    return PI * num * num;
}

let input = prompt("Enter Radius :");
console.log(CircleArea(input));