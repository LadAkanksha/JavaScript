/*
2. Accept N numbers from user and return difference between frequency of
even number and odd numbers.

Input : N : 7
 Elements : 85 66 3 80 93 88 90
Output : 1 (4 -3) 

*/

function frequency(arr){
    let eCnt = 0 , oCnt = 0;
    for(let val of arr){
        if(val%2 == 0){
            eCnt++;
        }
        else{
            oCnt++;
        }
    }
    console.log(eCnt);
    console.log(oCnt);
    return eCnt-oCnt;
}

let element = [];
let cnt = parseInt(prompt("Enter number of elements : "));
for(let i = 0 ; i < cnt ; i++){
    element[i] = parseInt(prompt(`Enter Element ${i+1}:`));
}
let iRet = frequency(element);
console.log(iRet);