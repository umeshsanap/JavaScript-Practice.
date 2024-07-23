let num_array = [1,2,3,5,6,8,4,2,6,9];
let min = num_array[0];
let max = num_array[0];
let comparisons = 0;
for(let i =1; i< num_array.length; i++)
{
    if(num_array[i]<min)
    {
        min=num_array[i];
    }else{
        max=num_array[i];
    }
    comparisons++;
}
console.log("Minimum number is:-",min);
console.log("Maximum number is :-",max);
console.log("Number of Comparisons:-",comparisons)