var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

		 var wins = 0;
		 var losses = 0;
		 var numGuesses = 7;
		 var guessChoices = [];

		 var winsNum = document.getElementById("Wins-num");
		 var LossesNum = document.getElementById("Losses-num");
		 var GuessesLeft = document.getElementById("Guesses-Left");
		 var yourChoices = document.getElementById("your choices of letters so far");

		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	

			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					numGuesses = 7;
					guessChoices = [];
				}



				if (userGuess != computerGuess) {
					numGuesses --;
					guessChoices.push(userGuess);
				}

				if (numGuesses === 0) {

				numGuesses = 7;
				losses ++;
				guessChoices = [];

				
			}

			winsNum.textContent = + wins +;
			LossesNum.textContent = "Losses: " + losses +;
			GuessesLeft.textContent = "Guesses Left: " + numGuesses +;
			yourChoices.textContent = "Your guesses so far: " + guessChoices.join(",") +;

			
			}
		};
