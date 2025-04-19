/*
3. Accept N numbers from user and display all such elements which are
even and divisible by 5.

    Input : N : 6
    Elements : 85 66 3 80 93 88
    Output : 80 
*/

function Display(arr,length)
{
    for(let i = 0 ; i < length ; i++){
        if(arr[i] % 2 == 0 && arr[i] % 5 == 0)
        {
            console.log(arr[i]);
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