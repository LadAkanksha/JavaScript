/*
1. Accept N numbers from user and return the largest number.

    Input : N : 6
    Elements : 85 66 3 66 93 88
    Output : 93 
*/

function maximum(arr,length){
    let max = arr[0];
    for(let i = 0 ; i < length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let elements = [];
let cnt = parseInt(prompt("Enter Number of Elements : "));
for(let i = 0 ; i < cnt ; i++){
    elements[i] = parseInt(prompt(`Enter value for ${i+1} : `));
}
let ret = maximum(elements , cnt);
console.log("Largest number is : ",ret);