let score = parseInt(prompt('Enter the score'))
if (score >= 90) {
    console.log("The grade for the score is: A");
} else if (score >= 80 && score < 90) {
    console.log("The grade for the score is: B");
} else if (score >= 70 && score < 80) {
    console.log("The grade for the score is: C");
} else if (score >= 60 && score < 70) {
    console.log("The grade for the score is: D");
} else {
    console.log("The grade for the score is: E");
}