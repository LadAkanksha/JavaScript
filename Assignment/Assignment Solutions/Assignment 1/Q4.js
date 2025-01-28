// Accept one number and check whether is is divisible by 5 or not.

function Check(num){
    if(num % 5 == 0)
    {
        return true;
    }
    else
    return false;
}

let no = prompt("Enter Any Number : ");
let ans = Check(no);
if(ans == true)
{
    console.log("Number is divisible by 5");
}
else
{
    console.log("Number is not divisible by 5");
}