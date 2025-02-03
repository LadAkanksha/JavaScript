/*
3. Design application for school management system.
As school is primary there are 4 standards from 1 to 4.
School fees of each standard is different.
For first standard fees are 8900, for second standard 12790, for third standard 21000 and
for fourth standard fees are 23450.
We have to accept standard from user and display the corresponding fees. 

Input : 2 Output : 12790
Input : 4 Output : 23450
Input : 6 Output : Wrong input 
*/

function SchoolFees(Standard)
{
    if(Standard == 1)
    {
        console.log("First Standard Fees are 8900");
    }
    else if(Standard == 2)
    {
        console.log("Second Standard Fees are 12790");
    }
    else if(Standard == 3)
    {
        console.log("Third Standard Fees are 21000");
    }
    else if(Standard == 4)
    {
        console.log("Fourth Standard Fees are 23450");
    }
    else
    {
        console.log("Wrong Input");
    }
}
SchoolFees(2);
SchoolFees(4);
SchoolFees(1);
SchoolFees(9);