/*
4. We have to design application for tourist company.
Tourist company provides cars on rent.
Depends on the running of car they apply rent.
If running is less than 100 kilometres then they charge 25 rupees per kilometre .
And if running is more than 100 kilometres then they apply 15 rupees per kilometre after
100 kilometres.
We have to accept number of kilometres from user and return the estimated rent.
Input : 73 Output : 1825
Input : 132 Output : 2980
Input : 189 Output : 3835 
*/

function TouristBill(Kms)
{
    if(Kms >= 100)
    {
        return Kms * 15;
    }
    else
    {
        return Kms * 25;
    }
}

let Ans = TouristBill(132);
console.log(Ans);

Ans = TouristBill(73);
console.log(Ans);

Ans = TouristBill(189);
console.log(Ans);