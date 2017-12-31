console.log('Loaded!');

alert ('modified main.js');

var element = document.getElementById('main-text');
element.innerHTML = "new label";

var img = document.getElementById('madi');
img.onclick=function() {
img.style.marginLeft+='100px';
};
