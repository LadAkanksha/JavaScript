/*
2. Accept amount in US dollar and return its corresponding value in Indian currency.
Consider 1$ as 70 rupees.
Input : 10
Output : 700
Input : 3
Output : 270
Input : 1200
Output : 84000 
*/

function DollarToINR(amount)
{
    return amount*70;
}

let amt = prompt("Enter Number Of USD : ");

console.log("Value in INR is ",DollarToINR(amt));