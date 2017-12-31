var button = document.getElementById('counter');
console.log('executed 0');
var counter = 0;
button.onclick = function (){
       
  //make request to counter end point
  
  //Capture the response and store it in a variable
  
  //Render the variable in the correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};