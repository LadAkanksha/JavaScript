/*
5. Accept N numbers from user and return product of all odd elements.

    Input : N : 6
    Elements : 15 66 3 70 10 88
    Output : 45

    Input : N : 6
    Elements : 44 66 72 70 10 88
    Output : 0 

*/
function product(arr){
    let prod = 1 , flag= 0;
    for(let val of arr){
        if(val % 2 != 0){
            prod *= val;
            flag = 1;
        }
    }
    if(flag == 1){
        return prod;
    }
    else{
        return flag;
    }
}
let elements = [];
let cnt = parseInt(prompt("Enter number of elements : "));
for(let i = 0 ; i < cnt ; i++){
    elements[i] = parseInt(prompt("Enter "+(i+1)+" elements : "));
}
console.log(product(elements));