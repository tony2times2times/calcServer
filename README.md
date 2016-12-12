Weekend 3 challenge
===================

[x]build a calculator application using jQuery, Node, and Express.
[x]The logic for the calculator needs to be housed on the Server,
[x]where the client side will take in the values

[]the type of mathematical operation (selected using a button on the DOM).
note: My opperator is entered by the user in the input

[x]Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. So when the object is sent, it should look something like this: { x: 3, y: 4, type: Add }
[x]Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways.
[x]The server should be able to handle Addition, Subtraction, Multiplication, and Division.
[x]Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.

[x]Finally, build a 'clear' button that resets the whole experience.
note: experience is cleared once input is entered

HARD MODE:
[]Convert the input fields for the two values to Buttons. So the experience would allow the user to click on a numerical button, then a mathematical operation, then a numerical button again. Then have an equal button that sends all of the information to the server.

PRO MODE:
[]Style the whole experience using Bootstrap to resemble the design of a physical calculator.
[x]include decimal points in your number logic.
[]Finally, convert your logic to have the client side handle which mathematical operation is run. Once it determines this, it will use that to change the url or the post request to pair with a server side route that handles that type of mathematical operation.

What I did:
[x] use regular expressions to parse user input
