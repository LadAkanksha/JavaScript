// Program to divide two numbers.

function Divide(no1 , no2){
    if(no2 == 0)
    {
        return -1;
    }
    return no1/no2;
}
let Ans = Divide(15,3);
console.log(Ans);