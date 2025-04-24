/*

3. Accept N numbers from user and return the difference between largest
   and smallest number.

    Input : N : 6
    Elements : 85 66 3 66 93 88
    Output : 90 (93 -3)

*/

function difference(arr , length){
    let max = min = arr[0];
    for(let i = 0 ; i < length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return max-min;
}

let elements = [];
let cnt = parseInt(prompt("Enter Number of Elements : "));
for(let i = 0 ; i < cnt ; i++){
    elements[i] = parseInt(prompt(`Enter value for ${i+1} : `));
}
let ret = difference(elements , cnt);
console.log("Difference between Largest and Smallest number is : ",ret);