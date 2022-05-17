var par = document.createElement('P');

par.textContent = 'The DOM is the bomb!';

document.body.appendChild(par);

var div = document.createElement('DIV');

div.style.height = '100vh';

document.body.appendChild(div);

div.appendChild(par);

div.addEventListener('mousemove', function(event) {
    console.log(event);
    var x = event.clientX;
    var y = event.clientY;
    div.textContent = x + ', ' + y;
    div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
});