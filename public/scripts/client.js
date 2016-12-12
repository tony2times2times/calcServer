//Debug enables console logs
var debug = true;

$(document).ready(function() {
  if (debug) {
      console.log("Document is ready");
  }
    enable();
});

//enable event listeners
function enable() {
    $('#calculate').on('click', gather);
    $("#calc-input").keyup(function(event){
    if(event.keyCode == 13){
        $("#calculate").click();
    }
});
}

function gather() {
    //hide instructions after user inputs data
    $('#instructions').hide();
    //use regular expressions to seperate opperator from numbers
    var regex = /\s*[\*||\/|| \- || \+]\s*/;
    //get user input
    var problem = $('#calc-input').val();
    //reselt input to empty string
    $('#calc-input').val('');
    var opperator = problem.match(regex)[0];
    if (debug) {
        console.log(opperator);
    }
    var numbers = problem.split(regex);
    if (debug) {
        console.log("numbers: " + numbers);
    }
    //redefine problem as an object before POSTing to the server
    problem = {
        opperator: opperator,
        numbers: numbers
    };
    //after data is gathered post it to the server
    postCalculator(problem);
}

//pass the problem object to the server
function postCalculator(problem) {
    $.ajax({
        type: 'POST',
        url: '/calculator',
        data: problem,
        success: function(data) {
            displaySolution(data);
        },
        error: function() {
            console.log('No response from server');
        }
    });
}
function displaySolution(problem){
  solution = problem['numbers[]'][0]+problem.opperator+problem['numbers[]'][1]+" = "+problem.solution+'<br>';
  $('#solution').append(solution);
}
