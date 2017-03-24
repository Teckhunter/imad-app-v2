//Counter

var button = document.getElementById('counter');
button.onclick = function()
{
    
    //making a request variable
    var request = new XMLHttpRequest();

//
request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        //Take some action
        if (request.status === 200) {
            var counter = request.responseText;
    var span = document.getElementById('kratos').innerHTML;
    span.innerHTML = counter.toString();
    
}
}
};
request.open('GET', 'http://teckhunter.imad.hasura-app.io/counter',true);
request.send(null);
};