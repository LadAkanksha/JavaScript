/*
3. Write a program which accept two numbers and check whether numbers are
equal or not.

 Input : 10 10
 Output : Equal

 Input : 10 12
 Output : Not Equal

 Input : 10 -10
 Output : Not Equal
*/

function chkEqual(n1 , n2){
    if(n1 === n2)
    {
        return true;
    }
    else if(n1 !== n2)
    {
        return false;
    }
}

let num1 = prompt("Please Enter 1st Number : ");
let num2 = prompt("Please Enter 2nd Number :");

let ans = chkEqual(num1,num2);
if(ans == false)
    console.log("Not Equal");
else
    console.log("Equal");