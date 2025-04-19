/*
2. Accept N numbers from user and display all such elements which are divisible by 5.

    Input : N : 6
    Elements : 85 66 3 80 93 88
    Output : 85 80 
*/

function Display(array , length){
    for(let i = 0 ; i < length ; i++){
        if(array[i] % 5 == 0)
        {
            console.log(array[i]);
        }
    }
}

let arr = [];
let cnt = parseInt(prompt("Enter How Many Number You Calculate : "));
for(let i = 0 ; i < cnt ; i++)
{
    arr[i]  = parseInt(prompt(`Enter ${i+1} Value : `));
}
console.log(arr);
Display(arr,cnt);