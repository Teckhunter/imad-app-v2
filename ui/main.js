console.log('Loaded!');


var element=document.getElementById('main-text');
element.innerHTML = 'Voracious Reader';

var imag = document.getElementById('madi');
function moveRight()
{
    marginleft = marginleft+10;
    img.style.marginLeft = marginLeft + 'px';
}

imag.onclick = function()
{
    var interval = setInterval(moveRight,100);
    img.style.marginRight = '200px';
};