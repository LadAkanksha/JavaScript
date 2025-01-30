// 5. Accept number from user and check whether number is even or odd. 

function ChkEven(num)
{
    if(num % 2 == 0)
        return true;
    else
        return false;
}

let No = prompt("Enter A Number :");
let Ans = ChkEven(No);

if(Ans == true)
    console.log("Number is Even.");
else
    console.log("Number is Odd.");