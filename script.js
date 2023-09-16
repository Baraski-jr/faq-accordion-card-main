const questions = document.querySelectorAll(".question");
let answer;
let arrow;
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    answer = question.nextElementSibling;
    arrow = question.parentElement.nextElementSibling;
    if (answer.classList.contains("open")) {
      answer.classList.remove("open");
      question.classList.remove("active");
      arrow.classList.remove("open-arrow");
    } else {
      answer.classList.add("open");
      question.classList.add("active");
      arrow.classList.add("open-arrow");
    }
  });
});
