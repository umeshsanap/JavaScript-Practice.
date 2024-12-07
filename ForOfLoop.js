let str = "umeshsanap";
let size = 0;
for(let i of str)
{
    if(i == "s")
    {
        console.log("i = $")
    } 
    else if(i == "a")
    {
        console.log("i = @")
    }
    else{
        console.log("i =",i)

    }
    size++;
}
console.log("length of given string is :- ", size)
