
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

// event handler for Word Search Box
document.getElementById('search').addEventListener('change', ()=>{
    removeClassName('table-info')
    let tds = document.getElementsByTagName("td");
    search_word = document.getElementById('search').value.toLowerCase()
    let word_match = "";
    for (let i = 0; i < tds.length; i++) {
        const element = tds[i];
        if(search_word == tds[i].innerText){
            word_match = tds[i]
        }
    }
    // if word exsits in the page
    if(word_match !== ""){
        window.scrollTo(0, word_match.offsetTop);
        word_match.parentNode.className += "table-info"
    }
    // when match word is NOT found
    else{
        console.log("no match")
    }
})


function removeClassName(className){
    let cls = document.getElementsByClassName(className);
    for(cl of cls){
        cl.classList.remove(className);
    }
}

document.getElementById('page_top').addEventListener('click', ()=>{
    window.scrollTo(0,0);
})