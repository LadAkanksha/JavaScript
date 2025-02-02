/*
1.Write a program which accept number from user and display its multiplication of
factors.
Input : 12
Output : 144 (1 * 2 * 3 * 4 * 6)
Input : 13
Output : 1 (1)
Input : 10
Output : 10 (1 * 2 * 5) 
*/

function MulFact(num){
    if(num <= 0)
    {
        return 0;
    }
    let Product = 1;
    for(let i = 0 ; i <= num/2 ; ++i)
    {
        if(num % i == 0)
        {
            Product *= i;
        }
    }
    return Product;
}

/*
let num = prompt("Enter a Number : ");
let Ans = MulFact(num);
*/
console.log(MulFact(12));
console.log(MulFact(17));
console.log(MulFact(10));
console.log(MulFact(0));