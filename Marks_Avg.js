let student_marks = [85,97,44,37,76,60]
let sum =0
for(let i = 0; i<student_marks.length; i++)
{
    sum = sum +student_marks[i];
}
let avg = sum / student_marks.length;
console.log("Average of student marks :-",avg)