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
    $("#calc-input").keyup(function(event) {
        if (event.keyCode == 13) {
            $("#calculate").click();
        }
    });
}

function gather() {
    //hide instructions after user inputs data
    $('#instructions').hide();
    //use regular expressions to seperate opperator from numbers
    var regex = /\s*[\*||\/|| \- || \+ || 'x']\s*/;
    //get user input
    var problem = $('#calc-input').val();
    //reset input to empty string
    $('#calc-input').val('');
    //sanitize user input to erase all spaces
    problem = problem.replace(/\s*\s*/g, '');
    if (debug) {
        console.log('This should have no spaces: ' + problem);
    }
    var opperator = problem.match(regex);
    //check to see if an opperator was used
    if(opperator === null){
      $('#instructions').show();
      alert("Please enter a valid math equation. Using one of the following opperators: + - * x /");
      return;
    }
    opperator = opperator[0];
    var numbers = problem.split(regex);
    if (debug) {
        console.log("numbers: " + numbers);
    }
    if(numbers.length != 2){
      $('#instructions').show();
      alert("Please only enter a single math problem at a time.");
      return;
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

function displaySolution(problem) {
    var x = problem['numbers[]'][0];
    var y = problem['numbers[]'][1];
    solution = " = " + problem.solution + '<br>';
    $('#solution').append(x + problem.opperator + y + solution);
}
