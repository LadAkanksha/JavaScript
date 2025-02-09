/*
2. Write a program which accept width & height of rectangle from user and calculate
its area. (Area = Width * Height)

Input : 5.3 9.78
Output : 51.834

*/

function RectArea(w,h)
{
    return w*h;
}


let width = prompt("Enter Width :");
let height = prompt("Enter Height : ");
let ans = RectArea(width,height);
console.log("Area is ",ans);