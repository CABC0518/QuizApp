

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

function makeAQuestion(){
  let choices_answer_arr = getQuestion()
  console.log(choices_answer_arr)
  let choices_cls = document.getElementsByClassName("choices");
  console.log(choices_cls)
  for (let i = 0; i < choices_cls.length; i++) {
    let choice = document.createTextNode(choices_answer_arr[0][i].fin_word)
    choices_cls[i].appendChild(choice)
  }
  console.log(choices_answer_arr[1][0])
  let question_word = document.createTextNode(choices_answer_arr[1].eng_word)
  document.getElementById('question_word').appendChild(question_word)

}

makeAQuestion()
