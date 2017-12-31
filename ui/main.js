console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = "New Value";

var image = document.getElementById('madi');
image.onClick = function() {
    console.log('Function called');
    image.style.marginLeft = '100px';
};