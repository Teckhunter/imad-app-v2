//Counter

var button = document.getElementById('counter');
button.onclick = function()
{
    counter = counter+2;
    var span = document.getElementById('count').innerHTML;
    span.innerHTML = counter.toString();
    
}
