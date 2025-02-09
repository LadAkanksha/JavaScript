/*
3. Write a program which accept distance in kilometre and convert it into meter. (1
kilometre = 1000 Meter)

Input : 5
Output : 5000

Input : 12
Output : 12000

*/

function KMtoMeter(no)
{
    return no*1000;
}

let val = prompt("Enter Distance in (Km) : ");
let ans = KMtoMeter(val);
console.log(val," Kilometer = ",ans,"Meter.");
