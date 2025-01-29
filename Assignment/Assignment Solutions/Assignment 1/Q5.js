// 5. Accept one number from user and print that number of * on screen. 


function Accept(num)
{
    for(i = 1 ; i <= num ; ++i)
    {
        console.log(" * ");
    }
}

let no = prompt("Enter Any Number For Result : ");
Accept(no);