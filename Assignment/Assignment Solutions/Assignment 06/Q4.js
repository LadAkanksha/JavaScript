/*
 4. Write a program which accept three numbers and print its multiplication.
 
 Input : 5 4 7
 Output : 140
 
 Input : 5 0 7
 Output : 35
 
 Input : 5 0 0
 Output : 5
 
 Input : 0 0 0
 Output : 0
*/

function multiply(n1,n2,n3)
{
    if(n1 != 0 && n2 != 0 && n3 != 0)
    {
        return n1*n2*n3;
    }
    else if(n1 == 0 && n2 != 0 && n3 != 0)
    {
        return n2*n3;
    }
    else if(n2 == 0 && n3 != 0)
    {
        return n1*n3;
    }
    else
    {
        return n1*n2;
    }
}
let num1 = prompt("Please Enter 1st Number : ");
let num2 = prompt("Please Enter 2nd Number :");
let num3 = prompt("Please Enter 3rd Number :");

let mul = multiply(num1,num2,num3);
console.log(mul);