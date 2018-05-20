    var bank =["apples", "bananas","watermelon", "pears", "lemon", "strawberry"]    
    
    var playWord = ""
  
    var guess="";
      
    var lives=5;
    
    var indicator=[];
    var display ="";
    

function game(){

    playWord =bank[Math.floor(Math.random() * bank.length)];
    
    for (l=0; l < playWord.length; l++){
            indicator[l]="_ "; 
        };
    
    
    
    display= indicator.join("");
    
    document.getElementById("result").innerHTML = display; 
    document.getElementById("lives").innerHTML = lives+" lives remain."

    function checkGuess() {

                 var wrong=false;
                function hurt () {if (wrong===true){ lives--; alert("Ouch " +guess + " is not correct")}}
                
            for(var i=0 ; i< playWord.length; i++){


                               
               if (playWord[i] === guess){ indicator[i] = guess;
                document.getElementById("result").innerHTML =  indicator.join("");
                
                }
                else if (playWord.indexOf(guess) === -1) {;
                wrong= true;
                
                }}
                hurt();    
                document.getElementById("result").innerHTML =  indicator.join("")
                document.getElementById("lives").innerHTML = lives+" lives remain."
           
    }; 
         

            


    document.onkeypress = function(e) {
        e = e || window.event;
        var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        guess = String.fromCharCode(charCode);
        console.log(guess)
        checkGuess();
        };
 



}; 


