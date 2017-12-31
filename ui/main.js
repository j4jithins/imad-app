var button = document.getElementById('counter');

button.onclick = function (){
       
  //create request object
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
    }
  };
  //Render the variable in the correct span
  
  //make the request
  request.open('GET','http://jithinshaji1298.imad.hasura-app.io/counter',true);
  request.send(null);
  
};