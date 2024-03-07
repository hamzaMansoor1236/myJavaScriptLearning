//Print the first 10 Fibonacci numbers without recursion
function fib(endingNumber){
    if(endingNumber===0)
    {
        console.log("none");
    }
    else if(endingNumber===1)
    {
        console.log(0);
    }
    else{
         let first=0;
         let second=1;
        console.log(first);
        console.log(second);
        for(let i=2;i<endingNumber;i++)
        {
            let temp=first+second;
            console.log(temp);
            first=second;
            second=temp;
        }
    }
}
fib(7);

