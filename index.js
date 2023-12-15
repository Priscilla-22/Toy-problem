/* Challenge 1:
 Student Grade Generator */
const marks = prompt('Enter your marks: ');
const grade = gradeCalculator(marks);

function gradeCalculator() {
  if (marks >= 80 && marks <= 100) {
    return 'A';
  } else if (marks >= 60 && marks <= 79) {
    return 'B';
  } else if (marks >= 49 && marks <= 59) {
    return 'C';
  } else if (marks >= 40 && marks <= 49) {
    return 'D';
  } else {
    return 'E';
  }
}

const result = grade;
console.log(`Your garde is: ${result}`);
