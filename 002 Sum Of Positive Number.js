//Calculate the sum of digits of a positive integer number without using builtin javascript functions

let num=123456789;
let sum=0;
for(;num>0;)
{
    let remainder = num % 10;
    sum+=remainder;
    num=num-remainder;
    num=num/10;
    
}

console.log(sum);