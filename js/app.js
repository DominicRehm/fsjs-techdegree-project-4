let game;
let phrase;

// select the reset button
const resetBtn = document.querySelector('#btn__reset');

// start the game by clicking the button
resetBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// select the keyboard
const keyboard = document.querySelector('#qwerty');

// eventlistener for keyboard
keyboard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});