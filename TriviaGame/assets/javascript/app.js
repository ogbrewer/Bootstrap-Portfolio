
    
        var number = 30;
        var percentcorrect= 0;
        var intervalId;
        var answers = ["B", "A", "D", "false"];
        tot = answers.length;


        $("#start").on("click", start);



        function decrement() {

            number--;

            $("#show-number").html("<h2>" + number + " seconds remaining" + "</h2>");
            if (number === 0) {

                stop();

                alert("Time Up!");
                $("#gamescreen").html();
                findCheckedValue();
                $("#gamescreen").html("You got "+ getScore() +"/"+ tot + " correct! <br> You got " + (tot - getScore()) + " incorrect!");

            }
        }
        function findCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); 
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; 
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(findCheckedValue("question"+i)===answers[i]) score += 1; 
  return score;
}

function returnScore(){
    $("#gamescreen").html("You got "+ getScore() +"/"+ tot + " correct <br> You got " + (tot - getScore()) + " incorrect");

}
function start() {

  if (!clockRunning) {
    intervalId = setInterval(decrement, 1000);
    clockRunning = true;
  }
}
            
        function stop() {

            clearInterval(intervalId);
        }
        function start() {
            intervalId = setInterval(decrement, 1000);
        }

