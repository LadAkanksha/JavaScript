/*
4. Accept N numbers from user and accept Range, Display all elements from
that range.

    Input : N : 6
    Start: 60
    End : 90
    Elements : 85 66 3 76 93 88
    Output : 66 76 88

    Input : N : 6
    Start: 30
    End : 50
    Elements : 85 66 3 76 93 88
    Output :

*/
function range(arr , length , start , end){
    console.log(arr);
    for(let val of arr){
        if(val >= start && val <= end){
            console.log(val);
        }
    }
}

let elements = [];
let cnt = parseInt(prompt("Enter number of elements : "));
let spt = parseInt(prompt("Enter the Starting Point : "));
let ept = parseInt(prompt("Enter the Ending Point : "));
for(let i = 0 ; i < cnt ; i++){
    elements[i] = parseInt(prompt("Enter "+(i+1)+" elements : "));
}
range(elements ,elements.length, spt , ept);