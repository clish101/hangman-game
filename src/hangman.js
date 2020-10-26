class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }
  changeStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === ' '
    );
    if (this.remainingGuesses === 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }
  get statusMessage() {
    if (this.status === 'playing') {
      return `Guess left:${this.remainingGuesses}`;
    } else if (this.status === 'finished') {
      return 'Great work! You guessed the word';
    } else {
      return `Nice try! The word was "${this.word.join('')}"`;
    }
  }
  makeAGuess(x) {
    x = x.toLowerCase();
    if (!this.guessedLetters.includes(x) && this.word.includes(x)) {
      this.guessedLetters.push(x);
    } else if (this.guessedLetters.includes(x) && this.word.includes(x)) {
      return this.guessedLetters;
    } else if (this.guessedLetters.includes(x) && !this.word.includes(x)) {
      return this.guessedLetters;
    } else if (!this.guessedLetters.includes(x) && !this.word.includes(x)) {
      this.guessedLetters.push(x);
      if (this.status === 'finished') {
        return this.remainingGuesses;
      } else {
        if (this.remainingGuesses < 1) {
          this.remainingGuesses = 0;
        } else {
          this.remainingGuesses -= 1;
        }
      }
    }
    this.changeStatus();
    this.statusMessage;
  }
  get getPuzzle() {
    let wording = '';

    this.word.forEach((x) => {
      if (this.guessedLetters.includes(x) && x !== ' ') {
        wording += x;
      } else if (x === ' ') {
        wording += ' ';
      } else {
        wording += '*';
      }
    });
    return wording;
  }
}

export { Hangman as default };
