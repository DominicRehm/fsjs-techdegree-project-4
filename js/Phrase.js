class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    };

    addPhraseToDisplay() {
        // select the phrase ul
        const phraseList = document.querySelector('#phrase ul');
        // split the phrase string into single letters
        const splitPhrase = this.phrase.toUpperCase().split('');

        for (let i = 0; i < splitPhrase.length; i++) {
            // check if the character isn't a whitespace
            if (splitPhrase[i] !== ' ') {
                phraseList.innerHTML += `
                    <li class="hide letter ${splitPhrase[i]}">${splitPhrase[i]}</li>
                `
            } else {
                phraseList.innerHTML += `
                    <li class="space">${splitPhrase[i]}</li>
                `
            }
        };
        return splitPhrase;
    };

    checkLetter(target) {
        // save the textContent in the targetContent
        const targetContent = target.textContent;
        const phraseItems = document.querySelectorAll('#phrase li');
        let equals = null;
        for (let i = 0; i < phraseItems.length; i++) {
            if (targetContent == phraseItems[i].textContent) {
                // the user pick the right key
                equals = true;
                target.className = 'chosen';
                target.disabled = true;
                break;
            } else {
                // the user pick the wrong key
                target.className = 'wrong';
                target.disabled = true;
                equals = false;
            }
        };
        return equals;
    };

    showMatchedLetter(matchedLetter, target) {
        const phraseItems = document.querySelectorAll('#phrase li');
        let targetKey = target.textContent.toUpperCase();

        for (let i = 0; i < phraseItems.length; i++) {

            if (matchedLetter) {
                if (targetKey == phraseItems[i].textContent) {
                    phraseItems[i].className = 'show';
                }
            }
        };
    };
};