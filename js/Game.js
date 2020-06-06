class Game {
    constructor() {
        this.missed = 0;
        this.letters = 0;
        this.phrases = [
            'Phrase Hunter',
            'Techdegree',
            'America',
            'Germany',
            'Happy Coding'
        ];
        this.activePhrase = null;
    };

    startGame() {
        // Hide the start overlay
        document.querySelector('#overlay').style.display = 'none';
        const phrase = new Phrase(this.getRandomPhrase());
        const splitPhrase = phrase.addPhraseToDisplay(phrase);
        this.activePhrase = splitPhrase;
        // save the amount of letters in letters
        for (let i = 0; i < splitPhrase.length; i++) {
            if (splitPhrase[i] !== ' ') {
                this.letters += 1;
            };
        };
    };

    getRandomPhrase() {
        // create a random phrase from the phrase array
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    };

    handleInteraction(target) {
        // create a const with the phrase class
        const phrase = new Phrase(this.activePhrase);
        // call the showMatchedLetter with checkLetter to verify
        let letterStatus = phrase.checkLetter(target);
        // show the matched letter
        phrase.showMatchedLetter(letterStatus, target)
        // if the wrong button is clicked -> call removeLife()
        if (!letterStatus) {
            this.removeLife();
        };
        // check if the user win or lose
        this.gameOver(this.checkForWin());
    };

    removeLife(letterStatus) {
        const tries = document.querySelectorAll('.tries img');
        if (this.missed <= 4) {
            for (let i = 0; i <= tries.length; i++) {
                // change the png file src
                tries[this.missed].src = 'images/lostHeart.png';
            };
            this.missed += 1;
        };
    };

    checkForWin() {
        const showedLetters = document.querySelectorAll('.show');
        let status = null;
        if (showedLetters.length === this.letters) {
            // if the user wins
            return status = 'win';
        } else if (this.missed === 5) {
            // if the user loses
            return status = 'lose';
        }
    };

    gameOver(status) {
        const overlay = document.querySelector('#overlay');
        
        if (status === 'lose') {
            // display the overlay
            overlay.style.display = 'inherit';
            // set the class name to 'lose'
            overlay.className = 'lose';
            this.setToDefault();
            // change the text for losing 
            document.querySelector('#game-over-message').textContent = 'Sorry, that was false! Next round?';

        } else if (status === 'win') {
            // display the overlay
            overlay.style.display = 'inherit';
            // set the class name to 'win'
            overlay.className = 'win';
            this.setToDefault();
            // change the text for wining
            document.querySelector('#game-over-message').textContent = 'WOW! That was perfect! Try the next round!';
        }
    };

    // Default
    setToDefault() {
        // reset the phrase
        const phraseList = document.querySelector('#phrase ul');
        phraseList.innerHTML = '';
        // reset all the pressed keys
        const keys = document.querySelectorAll('.keyrow button');
        for (let i = 0; i < keys.length; i++) {
            keys[i].className = 'key';
            keys[i].disabled = false;
        };
        // reset the tries
        const tries = document.querySelectorAll('.tries img');
        for (let i = 0; i < tries.length; i++) {
            tries[i].src = "images/liveHeart.png";
        };
        // reset missed, letters and the activePhrase
        this.missed = 0;
        this.letters = 0;
        this.activePhrase = null;
    };

};