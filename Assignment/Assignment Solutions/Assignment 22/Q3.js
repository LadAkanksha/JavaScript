/*
    3. Accept N numbers from user check whether that numbers contains 11 in it or not.

    Input : N : 6
    Elements : 85 66 11 80 93 88
    Output : 11 is present

    Input : N : 6
    Elements : 85 66 3 80 93 88
    Output : 11 is absent

*/

function check(arr){
    for(let val of arr){
        if(val === 11){
            console.log("11 is Present");
            return;
        }
    }
    console.log("11 is Absent");
}

let element = [];
let count = parseInt(prompt("Enter number of elements : "));
for(let i = 1 ; i <= count ; i++){
    element[i] = parseInt(prompt("Enter Element "+i+" : "));
}
let iRet = check(element);