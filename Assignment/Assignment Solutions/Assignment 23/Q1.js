/*
1. Accept N numbers from user and accept one another number as NO ,
check whether NO is present or not.

    Input : N : 6
    NO: 66
    Elements : 85 66 3 66 93 88
    Output : TRUE

    Input : N : 6
    NO: 12
    Elements : 85 11 3 15 11 111
    Output : FALSE 
*/

function check(arr , no){
    for(let val of arr){
        if(val == no){
            return true;
        }
    }
    return false;
}

let elements = [];
let cnt = parseInt(prompt("Enter number of elements : "));
let srh = parseInt(prompt("Enter the number : "));
for(let i = 0 ; i < cnt ; i++){
    elements[i] = parseInt(prompt("Enter "+(i+1)+" elements : "));
}
console.log(check(elements , srh));