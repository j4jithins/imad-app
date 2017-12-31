var button = document.getElementById('counter');

button.onclick = function (){
       
  //make request to counter end point
  var request = new XMLHttpRequest();
  //Capture the response and store it in a variable
  request.onreadystatechange = function (){
    if (request.readyState === XMLHttpRequest.DONE){
        //take some action
        if (request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    };
  };
  //Render the variable in the correct span
  counter = counter + 1;
  
};