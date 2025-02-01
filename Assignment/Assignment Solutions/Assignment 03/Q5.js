/*
5. Accept on character from user and check whether that character is vowel
(a,e,i,o,u) or not.

Input : E Output : TRUE
Input : d Output : FALSE 


*/

function ChkVowel(val)
{
    if( val == 'A' || val == 'a' || val == 'E' || val == 'e' || val == 'I' || val == 'i' || val == 'O' || val == 'o' || val == 'U' || val == 'u')
    {
        return true;
    }
    else{
        return false;
    }
}

// let input = prompt("Enter Any Character : ");
// CkhVowel(input);

let ans = ChkVowel('E');
// let ans = ChkVowel('d');

// let ans = ChkVowel('i');
// let ans = ChkVowel('K');

if(ans == true)
{
    console.log("It is Vowel.");
}
else{
    console.log("It is not Vowel.");
}
