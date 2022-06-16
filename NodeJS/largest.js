var input=require("readline-sync");

var num1 = input.question("Enter 2 Numbers\n");
var num2 = input.question("");

if (num1 > num2) {
    console.log(num1+" is greater");
}
else if(num1===num2)
{
    console.log(" Both number are equal");
} else {
    console.log(num2+" is greater");
}