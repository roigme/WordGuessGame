# WordGuessGame
Basic Hangman style game


<<The Variables>>

    var bank= [] array full of possible words.
    
    var playWord= bank[i]  The word selected from the bank.
    var guess= (keypressed) the players keystroke 

<<Functions>>
    function checkGuess (i, guess){
        for ( i= 0; i< playWord.length>; i++)

            if guess = playWord[i] {
                console.log (playWord[i])
            }
            else {
                console.log ("loser")
            }
    }


<<The Game>>

The game has an array of related words.
on start The game selects one of the words at random from the array.
The game generates dashes for each letter of the word.
On a correct guess 
