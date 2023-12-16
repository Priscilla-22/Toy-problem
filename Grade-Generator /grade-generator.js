/* Challenge 1:
     Student Grade Generator */

//prompt for the user to key in their marks
const marks = prompt('Enter your marks: ');

function gradeCalculator(marks) {
  if (marks >= 80 && marks <= 100) {
    return 'A';
  } else if (marks >= 60 && marks <= 79) {
    return 'B';
  } else if (marks >= 49 && marks <= 59) {
    return 'C';
  } else if (marks >= 40 && marks <= 49) {
    return 'D';
  } else if (marks <= 40 && marks >= 0) {
    return 'E';
  } else {
    return 'Invalid marks';
  }
}

/* grade returned depending on the marks entered in the prompt
 You can use the prompt in the console or provide a value for the 'marks' variable when invoking the gradeCalculator function.
 */
const grade = gradeCalculator(marks);
console.log(`Your grade is: ${grade}`);
