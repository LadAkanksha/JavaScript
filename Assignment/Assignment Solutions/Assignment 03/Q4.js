/*
4. Accept one character from user and convert case of that character.

Input : a Output : A
Input : D Output : d 
*/

function DisplayConvert(Val){
    let res = '\0';
    if(Val >= 'A' && Val <= 'Z')
    {
        res = Val.toLowerCase();
        console.log(res);
    }
    else if(Val >= 'a' && Val <= 'z')
    {
        res = Val.toUpperCase();
        console.log(res);
    }
}

// let input = prompt("Enter A Character : ");
// displayConvert(input);

DisplayConvert('a');
DisplayConvert('D');