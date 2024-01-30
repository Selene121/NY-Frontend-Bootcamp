let score = parseInt(prompt("Enter the score"))

if (score >= 90) {
    console.log("The grade for the score", score, "is: A");
} else if (score >= 80 && score < 90) {
    console.log("The grade for the score", score, "is: B");
} else if (score >= 70 && score < 80) {
    console.log("The grade for the score", score, " is: C");
} else if (score >= 60 && score < 70) {
    console.log("The grade for the score", score, " is: D");
} else {
    console.log("The grade for the score", score, " is: E");
}

// let score = parseInt(prompt("Enter the score"))
// let grade;
// if (score >= 90) {
//     grade = 'A';
// } else if (score >= 80 && score < 90) {
//     grade = 'B';;
// } else if (score >= 70 && score < 80) {
//     grade = 'C';);
// } else if (score >= 60 && score < 70) {
//     grade = 'D';;
// } else {
//     grade = 'E';;
// }
// console.log("The grade for the score ${score} is: grade");