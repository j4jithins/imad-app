var button = document.getElementById('counter');
console.log('executed 1');
var counter = 0;
button.onClick = function (){
  //make request to counter end point
  
  //Capture the response and store it in a variable
  console.log('executed 1');
  //Render the variable in the correct span
  counter = counter + 1;
  alert('counter');
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};