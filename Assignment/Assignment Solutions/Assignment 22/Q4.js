/*
4. Accept N numbers from user and return frequency of 11 form it.

    Input : N : 6
    Elements : 85 66 3 15 93 88
    Output : 0

    Input : N : 6
    Elements : 85 11 3 15 11 111
    Output : 2
*/

function frequency(arr){
    let cnt = 0;
    for(let val of arr){
        if(val == 11){
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
let iRet = frequency(element);
console.log(iRet);
