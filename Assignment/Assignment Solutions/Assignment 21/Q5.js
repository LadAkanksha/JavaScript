/*
5. Accept N numbers from user and display all such elements which are multiples of 11.

    Input : N : 6
    Elements : 85 66 3 55 93 88
    Output : 66 55 88 
*/

function Display(arr , length)
{
    for(let val of arr)
    {
        if(val % 11 == 0)
        {
            console.log(val);
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