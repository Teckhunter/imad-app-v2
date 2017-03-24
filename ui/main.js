//Counter

var button = document.getElementById('counter');
var counter;
button.onClick = function()
{
    counter = counter+2;
    var span = document.getElementById('count');
    span.innerHTML = counter;
    
}
