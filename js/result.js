for (var i = 0; i < 10; i++) {
  let word_set_id = "word_set_" + i;
  console.log(word_set_id)
  let word_set = JSON.parse(localStorage.getItem(word_set_id))
  console.log(typeof word_set)
  document.getElementById(word_set_id).innerHTML
  = JSON.stringify(word_set[1].fin_word).replace('"', "").replace('"', "") + ' : ' + JSON.stringify(word_set[1].eng_word).replace('"', "").replace('"', "")
  console.log(document.getElementById(word_set_id))
}
