// find the missing number in an array.
/*condition is that 
if the maximum number of array is 5 then the array will contain
1,2,3,4,5 */
let number = [1,2,3,4,5,7];
let n = number.length + 1;
let actual_sum = 0;
let expected_sum = 0;
for(let i = 0; i<number.length; i++)
{
    actual_sum = actual_sum + number[i];
    expected_sum = (n*(n+1))/2;
}
console.log("Given array with missing element",number)
console.log("Actual Sum is :-",actual_sum)
console.log("Expected Sum is :-",expected_sum)
let result = expected_sum-actual_sum
console.log("Missing element :-",result)
number.push(result)
console.log("Given array after searching missing element:-",number)