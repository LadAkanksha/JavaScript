/*
2. Accept N numbers from user and return the smallest number. 

    Input : N : 6
    Elements : 85 66 3 66 93 88
    Output : 3 
*/

function minimum(arr,length){
    let min = arr[0];
    for(let i = 0 ; i < length ; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

let elements = [];
let cnt = parseInt(prompt("Enter Number of Elements : "));
for(let i = 0 ; i < cnt ; i++){
    elements[i] = parseInt(prompt(`Enter value for ${i+1} : `));
}
let ret = minimum(elements , cnt);
console.log("Smallest number is : ",ret);