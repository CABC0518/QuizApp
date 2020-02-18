
for (let i = 1; i < words_list.length -1; i++) {
    let tr = document.createElement('tr');

    let index_num_node = document.createElement("th")
    let attr = document.createAttribute('scope');
    attr.value = 'row'
    index_num_node.setAttributeNode(attr)
    num = document.createTextNode(i);
    index_num_node.appendChild(num);
    tr.appendChild(index_num_node)

    let td_fin = document.createElement("td");
    let fin_word = document.createTextNode(words_list[i].fin_word)
    td_fin.appendChild(fin_word)
    tr.appendChild(td_fin);

    let td_eng = document.createElement("td");
    let eng_word = document.createTextNode(words_list[i].eng_word)
    td_eng.appendChild(eng_word)
    tr.appendChild(td_eng);


    let tbody = document.getElementById("words_list")
    tbody.appendChild(tr)
    
}


document.getElementById('search').addEventListener('change', ()=>{
    selected_word = document.getElementById('search').value;
    console.log(selected_word)
    let filtered_word = words_list.filter(d => d.eng_word == selected_word)
    console.log(filtered_word)
    document.getElementById('search_result').innerHTML = filtered_word[0].fin_word
})