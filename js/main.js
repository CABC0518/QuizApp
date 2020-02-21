

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getQuestion(){
  let randomInt = []
  let choices = []
  let answer_word;
  for (var i = 0; i < 4; i++) {
    randomInt.push(getRandomInt(1, 999));
  }

  for (var i = 0; i < randomInt.length; i++) {
    choices.push(words_list[randomInt[i]])
  }
  answer_word = choices[getRandomInt(0,4)]
  return [choices, answer_word]
}

function makeQuestion(){
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
}

let quiz_count;
let num_of_correct_answer;

document.getElementById('start_btn').addEventListener('click', ()=>{
  quiz_count = 1
  num_of_correct_answer = 0
  document.getElementById('start_box').style.display = "none";
  document.getElementById('quiz_box').style.display = "block";
  makeQuestion()

})

let choices_cls = document.getElementsByClassName("choices");
console.log(choices_cls)
for(let i = 0; i < choices_cls.length; i++){
  choices_cls[i].addEventListener("click", ()=>{
      let answer_word = localStorage.getItem("answer_word");
      document.getElementById('correct').style.display = "none";
      document.getElementById('incorrect').style.display = "none";
      if(choices_cls[i].textContent == answer_word){
        console.log("User Input: ",choices_cls[i].textContent)
        document.getElementById('correct').style.display = "block";
        console.log("correct!")
      }else{
        console.log("User Input: ",choices_cls[i].textContent)
        document.getElementById('incorrect').style.display = "block";
      }
  })
}

// function checkAnsewr(answer){
//   let choices_cls = document.getElementsByClassName("choices");
//   for(choice of choices_cls){
//     choice.addEventListener("click", ()=>{
//       console.log(choice)
//     })
//   }
// }
