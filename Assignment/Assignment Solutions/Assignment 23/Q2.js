/*
2. Accept N numbers from user and accept one another number as NO ,
return index of first occurrence of that NO.

    Input : N : 6
    NO: 66
    Elements : 85 66 3 66 93 88
    Output : 1

    Input : N : 6
    NO: 12
    Elements : 85 11 3 15 11 111
    Output : -1 

*/

function firstOcc(arr , length , no){
    for(let val = 0 ; val < length ; val++){
        if(arr[val] == no){
            return val;
        }
    }
    return -1;
}


let elements = [];
let cnt = parseInt(prompt("Enter number of elements : "));
let srh = parseInt(prompt("Enter the number : "));
for(let i = 0 ; i < cnt ; i++){
    elements[i] = parseInt(prompt("Enter "+(i+1)+" elements : "));
}
console.log(firstOcc(elements ,elements.length, srh));