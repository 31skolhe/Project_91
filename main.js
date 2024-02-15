function send() {
    number1 = documentgetElementById("number1").value;
    number2 = documetn.gerElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
 question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
question_number = "<h4>" + number1 + "X"+ number +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'Check</button";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
documetn.getElementById("number2").value = "";
}