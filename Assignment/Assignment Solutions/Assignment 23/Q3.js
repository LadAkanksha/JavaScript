/*
    3. Accept N numbers from user and accept one another number as NO , return index of last occurrence of that NO.
    
    Input : N : 6
    NO: 66
    Elements : 85 66 3 66 93 88
    Output : 3

    Input : N : 6
    NO: 93
    Elements : 85 66 3 66 93 88
    Output : 4

    Input : N : 6
    NO: 12
    Elements : 85 11 3 15 11 111
    Output : -1 
*/

function lastOcc(arr , length , no){
    let idx = -1;
    console.log(arr);
    for(let i = 0 ; i < length ; i++){
        if(arr[i] == no){
            idx = i;
        }
    }
    return idx;
}

let elements = [];
let cnt = parseInt(prompt("Enter number of elements : "));
let srh = parseInt(prompt("Enter the number : "));
for(let i = 0 ; i < cnt ; i++){
    elements[i] = parseInt(prompt("Enter "+(i+1)+" elements : "));
}
console.log(lastOcc(elements ,elements.length, srh));