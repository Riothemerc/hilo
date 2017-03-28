$(document).ready(function(){
    //Once your code is hooked up you should see this message on your web page: “Scripts are linked”
    //Put all of your code under here.
    $('button').click(function(){
        console.log("you clicked?");
      var secretNumber =(2);
        var guess = $('input').val()
        if(secretNumber==guess){
              $('body').append("Correct!")
            
        }
        else if(secretNumber<guess){
            $('body').append("too high!")
        }
        else{$('body').append("too low!")
            
        }
        
         })
         console.log($('input').val())
    
});