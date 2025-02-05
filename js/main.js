function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getQuestion() {
  let randomInt = []
  let choices = []
  let answer_word;
  for (var i = 0; i < 4; i++) {
    randomInt.push(getRandomInt(1, 999));
  }

  for (var i = 0; i < randomInt.length; i++) {
    choices.push(words_list[randomInt[i]])
  }
  answer_word = choices[getRandomInt(0, 4)]
  return [choices, answer_word]
}

function refreshQuiz() {
  let question = document.getElementById("question_word")
  question.textContent = ""
  // refresh choices
  els = document.getElementsByClassName("choices")
  for (el of els) {
    el.textContent = "";
  }
}

function makeQuestion() {
  refreshQuiz()
  let choices_answer_arr = getQuestion()
  console.log(choices_answer_arr)
  let choices_cls = document.getElementsByClassName("choices");
  console.log(choices_cls)
  for (let i = 0; i < choices_cls.length; i++) {
    let choice = document.createTextNode(choices_answer_arr[0][i].fin_word)
    choices_cls[i].appendChild(choice)
  }

  let answer = choices_answer_arr[1].fin_word
  let question_word = document.createTextNode(choices_answer_arr[1].eng_word)
  document.getElementById('question_word').appendChild(question_word)
  localStorage.setItem('answer_word', choices_answer_arr[1].fin_word);
  let word_set = "word_set_" + quiz_count
  localStorage.setItem(word_set, JSON.stringify(choices_answer_arr));
}

let quiz_count = 0;
let counter = 0;
document.getElementById('counter').innerHTML = counter + " out of " + quiz_count + " questions are correct"

document.getElementById('start_btn').addEventListener('click', () => {
  document.getElementById('start_box').style.display = "none";
  document.getElementById('quiz_desc').style.display = "none";
  document.getElementById('quiz_box').style.display = "block";
  makeQuestion()
})


let choices_cls = document.getElementsByClassName("choices");
console.log(choices_cls)
for (let i = 0; i < choices_cls.length; i++) {
  choices_cls[i].addEventListener("click", () => {
    quiz_count++
    console.log(quiz_count)
    let answer_word = localStorage.getItem("answer_word");
    msgSetNone()
    // when asnwer is correct
    if (choices_cls[i].textContent == answer_word) {
      console.log("User Input: ", choices_cls[i].textContent)
      document.getElementById('correct').style.display = "block";
      counter++
      console.log(counter)
      console.log("correct!")
      // when asnwer is incorrect
    } else {
      console.log("User Input: ", choices_cls[i].textContent)
      document.getElementById('incorrect').style.display = "block";
    }
    if (quiz_count < 10) {
      setTimeout(() => {
        makeQuestion()
        document.getElementById('counter').innerHTML = counter + " out of " + quiz_count + " questions are correct"
        msgSetNone()
      }, 1000);
    } else {
      console.log("over 10")
      location.href = "./result.html"
    }
  })

}

function msgSetNone() {
  document.getElementById('correct').style.display = "none";
  document.getElementById('incorrect').style.display = "none";
}

// function checkAnsewr(answer){
//   let choices_cls = document.getElementsByClassName("choices");
//   for(choice of choices_cls){
//     choice.addEventListener("click", ()=>{
//       console.log(choice)
//     })
//   }
// }
