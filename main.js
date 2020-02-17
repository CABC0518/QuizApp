count = 0
score = 0
questions = ["banana", "apple", "pear", "peach"]

function NewQuestion(){
    if(count > 10)
    {
        sessionStorage.setItem("score", score);
        window.location.assign("result.html");
    }
    else
    {
        if(count === 0)
        {
            document.getElementById("counter").style.display = "inline-block";
            document.getElementById("counter").innerHTML = "Your score is " + score + " of " + count
            document.getElementById("title").style.display = "none";
            document.getElementById("start_btn").style.display = "none";
            let element = document.getElementById("quiz_section").style.display = "block";
            document.getElementById("question").innerHTML = "What does " + questions[count] + " mean ?";
        }
        else
        { 
            document.getElementById("counter").innerHTML = "Your score is " + score + " of " + count
            document.getElementById("correct_alert").style.display = "none";
            document.getElementById("incorrect_alert").style.display = "none";
            document.getElementById("next").style.display = "none";
            document.getElementById("answer_btn").style.display = "block";
            document.getElementById("answer_word").value = "";
            let element = document.getElementById("quiz_section").style.display = "block";  
            document.getElementById("question").innerHTML = "What does " + questions[count] + " mean ?";
        }
        count++;
        console.log(count);
    }

}


function CheckAnswer(){
    answer = "apple";
    document.getElementById("answer_btn").style.display = "none";
    if(answer === document.getElementById("answer_word").value){
        document.getElementById("correct_alert").style.display = "block";
        score++;
    }
    else
    {
        document.getElementById("incorrect_alert").style.display = "block";
    }
    document.getElementById("next").style.display = "block";
}

