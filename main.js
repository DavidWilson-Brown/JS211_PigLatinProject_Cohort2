'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  /**
   * Write a function that returns pigLatin
   * if word starts with vowel, add 'yay' to end
   * if word starts with consonant, find the first vowel,
   * split the word at the first vowel,
   * then add 'ay' to the end of the word
   * if word does not contain a vowel, add 'ay' to end
   * @param {string} word - represents word being transcribed into pigLatin
   * @returns word in pigLatin
   */

  // take accidental spaces out of the word &&
  // change all letters to lowerCase
  word = word.toLowerCase();
  word = word.trim();

  // create a variable that holds an array of the five vowels
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  // loop through the given word to find the first vowel or any vowels
  // the loop starts at 0, runs the length of the word, and increments by 1
  for(let letter = 0; letter < word.length; letter++) {
    // the includes() method will check if there is a vowel at the 0 index
    if(vowels.includes(word[0])) {
      // if so, it will add 'yay' to the word
      return word + 'yay'
      // else if a vowel is included in the word
    } else if(vowels.includes(word[letter])) {
      // it will return the word, sliced at the index before the vowel
      // and concatenate
      return word.slice(letter) + word.slice(0, letter) + 'ay';
    }
  } 

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.