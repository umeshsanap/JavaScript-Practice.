let count = 0;
function myVowels(str){
    for(let char of str)
    {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
        {
            count++;
        }
    }
    console.log("Number of vowels in the given string",count)
}
myVowels("umesh")