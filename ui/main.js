console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = "New Value";
var marginLeft;
var img = document.getElementById('madi');
img.onClick = function(){
marginLeft = marginLeft + 10;
img.style.marginLeft = marginLeft + 'px';
};