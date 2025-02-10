/*
4. Write a program which accept temperature in Fahrenheit and convert it into
celsius. (1 celsius = (Fahrenheit -32) * (5/9))

Input : 10
Output : -12.2222 (10 - 32) * (5/9)

Input : 34
Output : 1.11111 (34 - 32) * (5/9)

*/

function FhtoCs(temp)
{
    return (temp-32)*(5/9);
}

let val = prompt("Enter Temprature in Fahrenheit : ");
let ans = FhtoCs(val);
console.log(val,"Fahrenheit = ",ans,"Celsius.");