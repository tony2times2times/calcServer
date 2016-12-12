var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({
    extended: false
});
var port = process.env.PORT || 2364;


app.listen(port, function(req, res) {
    console.log('server listening on', port);
});

app.get('/', function(req, res) {
    console.log('base url hit');
    res.sendFile(path.resolve('public/index.html'));
});

app.post('/calculator', urlEncodedParser, function(req, res) {
    console.log('req:' + req.body['numbers[]'][0]);
    res.send(calculator(req.body));
});

app.use(express.static('public'));

//calculator function uses the opperator to create a solution property for the function.
function calculator(problem){
  if (problem.opperator === '*' || problem.opperator === 'x') {
    problem.solution = parseFloat(problem['numbers[]'][0]) * parseFloat(problem['numbers[]'][1]);
    return (problem);
  }
  else if (problem.opperator === '/') {
    problem.solution = parseFloat(problem['numbers[]'][0]) / parseFloat(problem['numbers[]'][1]);
    return (problem);
  }
  else if (problem.opperator === '+') {
    problem.solution = parseFloat(problem['numbers[]'][0]) + parseFloat(problem['numbers[]'][1]);
    return (problem);
  }
  else if (problem.opperator === '-') {
    problem.solution = parseFloat(problem['numbers[]'][0]) - parseFloat(problem['numbers[]'][1]);
    return (problem);
  }
  else{
    return ('Congrats you broke my calculator, you monster.');
  }
}
