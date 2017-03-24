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
    var interval = serInterval(moveRight,100);
    imag.style.marginleft = '200px';
};