let start = prompt("Enter the number from we want to print even number ")
let end = prompt("Enter the number till we want to print the even number")
let count = 0;
console.log("Even number from",start," to ",end," are as follow")
for(let i = start; i <= end; i++)
{
    if(i % 2 == 0)
    {
        console.log(i)
        count++;
    }
}
console.log("Total Even number from ",start," to ",end," are :-",count)