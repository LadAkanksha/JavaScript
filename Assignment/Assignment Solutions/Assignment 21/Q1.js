/*
1. Accept N numbers from user and return difference between summation
of even elements and summation of odd elements.

Input : N : 6
Elements : 85 66 3 80 93 88
Output : 53 (234 - 181)

*/

function Difference(arr,length)
{
    let eSum = 0, oSum = 0;
    for(let i = 0 ; i < length ; i++){
        if(arr[i] % 2 == 0){
            eSum += arr[i];
        }
        else{
            oSum += arr[i];
        }
    }
    console.log(eSum);
    console.log(oSum);
    return eSum - oSum;
}
let arr = [];
let cnt = parseInt(prompt("Enter How Many Number You Calculate : "));
for(let i = 0 ; i < cnt ; i++)
{
    arr[i]  = parseInt(prompt(`Enter ${i+1} Value : `));
}
console.log(arr);
let res = Difference(arr,cnt);
console.log(res);