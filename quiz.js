function calculateScore() {
let score=0;
let q1 = document.querySelector('input[type="radio"][name="Option"]:checked')
if (q1 && q1.value  === 'correct') {
    score++
}else(score=score)
let q2 = document.querySelector('input[type="radio"][name="Option1"]:checked')
if (q2 && q2.value  === 'correct') {
    score++
}else(score=score)
let q3 = document.querySelector('input[type="radio"][name="Option2"]:checked')
if (q3 && q3.value  === 'correct') {
    score++
}else(score=score)
let q4 = document.querySelector('input[type="radio"][name="Option3"]:checked')
if (q4 && q4.value  === 'correct') {
    score++
}else(score=score)
let q5 = document.querySelector('input[type="radio"][name="Option4"]:checked')
if (q5 && q5.value  === 'correct') {
    score++
}else(score=score)
document.getElementById("score").textContent = "Your score is: " + score + "/5";
}
