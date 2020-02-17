let score = sessionStorage.getItem("score");
document.getElementById("scoreboard").innerHTML = "<h2>You got " + score + " answers correct out of 10 questions</h2>";

function GoToHome(){
    window.location.assign("index.html");
}