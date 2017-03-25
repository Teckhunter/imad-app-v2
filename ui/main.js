//Counter Code

var counter = 0;

var button = document.getElementById('counter');
button.onclick = function()
{
//Make a request

//Capture Response


//render variable in correct span

counter= counter +1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
};