var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article = {
    
    articleOne : {
    title: 'article-one | Rahul',
    heading: 'Article One',
    date: '117-Mar-2017',
    content:`<p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>
            <p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>
            <p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>
            <p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>`
    
},


    
    articleTwo : {
    title: 'article-two | Rahul',
    heading: 'Article One',
    date: '117-Mar-2017',
    content:`<p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>
            <p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>
            <p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>
            <p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>`
},

    
    articleThree : {
    title: 'article-three | Rahul',
    heading: 'Article-Three',
    date: '117-Mar-2017',
    content:`<p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>
            <p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>
            <p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>
            <p>this article will become the base of a stupid foundation of the conglomerate and the jibber jabber
            </p>`

}
};

function createTemplate(data){
var title = data.title;
var heading= data.heading;
var content= data.content;
var htmlTemplate= `
    
<html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width intitial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr>
            <div>
            <h3>
               ${heading}
            </h3>
            </div>
            <div>
            ${content}
        </div>
    <div>
        
    maximus decimus and the hoppers.</div>
    </body>
</html>
`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one',function(req,res){
res.send(createTemplate(article[articleOne]));
});	
app.get('/article-two',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});	
app.get('/article-three',function(req,res){
	res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});	

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
