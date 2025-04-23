/*
    5. Accept N numbers from user and accept one another number as NO , return frequency of NO form it.

        Input : N : 6
        NO: 66
        Elements : 85 66 3 66 93 88
        Output : 2

        Input : N : 6
        NO: 12
        Elements : 85 11 3 15 11 111
        Output : 0 
*/

function frequency(arr , iNo){
    let cnt = 0;
    for(let val of arr){
        if(val == iNo){
            cnt++;
        }
    }
    return cnt;
}

let element = [];
let count = parseInt(prompt("Enter number of elements : "));
let srh = parseInt(prompt("Enter Number for search : "));
for(let i = 1 ; i <= count ; i++){
    element[i] = parseInt(prompt("Enter Element "+i+" : "));
}
let iRet = frequency(element , srh);
console.log(iRet);
