/*
1. Accept N numbers from user and return frequency of even numbers.

Input : N : 6
Elements : 85 66 3 80 93 88
Output : 3 

*/

function CountEven(arr){
    let cnt = 0;
    for(let val of arr){
        if(val % 2 == 0){
            cnt++;
        }
    }
    return cnt;
}

let element = [];
let count = parseInt(prompt("Enter number of elements : "));
for(let i = 1 ; i <= count ; i++){
    element[i] = parseInt(prompt("Enter Element "+i+" : "));
}
let iRet = CountEven(element);
console.log(iRet);