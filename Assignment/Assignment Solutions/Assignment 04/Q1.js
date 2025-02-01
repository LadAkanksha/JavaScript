/*
1. Design application for hotel. According to the management team of hotel they are giving
discount on total bill amount of customer.
If bill bill amount is less than 500 then there is no discount , if bill amount is less than 1500
and more than 500 they give 10% discount.
And if the bill amount is more than 1500 then they give 15% discount.
Our application should accept total bill amount and depends on the discount policy we have
to return the amount after applying discount.

Input : 1200 Output : 1080
Input : 290 Output : 290
Input : 3700 Output : 3145
*/
function CalculateBill(Amount){
    if(Amount < 500)
    {
        // 0%
        return Amount;
    }
    else if(Amount < 1500 && Amount >= 500)
    {
        // 10%
        return Amount - (Amount * 0.1);
    }
    else{
        // 15%
        return Amount - (Amount * 0.15);
    }
}


console.log("Your Bill is ",CalculateBill(1200));
console.log("Your Bill is ",CalculateBill(300));
console.log("Your Bill is ",CalculateBill(3700));