//Counter Code

var counter = 0;

var button = document.getElementById('counter');
button.onclick = function()
{
//Make a request
    var request = new XMLHttpRequest();

//Capture Response

    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
    //Take some action
        if (request.status === 200)
        {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
        }
        }    
};
//make the request
request.open('GET','http://teckhunter.imad.hasura-app.io/counter',true);
request.send(null);
//render variable in correct span

};