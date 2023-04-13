const answerDiv = document.getElementById("displayAnswer");

function QuestionButtonClick(e) {
    const answer = e.target.dataset.answer;
    answerDiv.textContent = answer;
}
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener('click', QuestionButtonClick);
  });