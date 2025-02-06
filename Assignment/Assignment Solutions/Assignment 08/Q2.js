// 2. Accept single digit number from user and print it into word. 

function Display(num)
{
    if(num < 0)
    {
        num = -num;
    }
    switch(num)
    {
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3 : 
            console.log("Three");
            break;
        case 4 : 
            console.log("Four");
            break;
        case 5 : 
            console.log("Five");
            break;
        case 6 : 
            console.log("Six");
            break;
        case 7 : 
            console.log("Seven");
            break;
        case 8 : 
            console.log("Eight");
            break;
        case 9 :
            console.log("Nine");
            break;
        case 10 :
            console.log("Ten");
            break;
            
        default :
        console.log("Invalid Input");
        break;
    }
}

// let no = prompt("Enter Number : ");
// Display(no);

Display(10);
Display(-8);
Display(20);