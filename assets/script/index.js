const alphabet = document.getElementById('alphabet');
const letters = alphabet.innerHTML;

const takeRandomLetter = () => {
const randomIndex = Math.floor(Math.random() * 32);
return letters[randomIndex];
}

const randomWord = takeRandomLetter() + takeRandomLetter() + takeRandomLetter() + takeRandomLetter();
console.log(randomWord);

const finalWord = document.getElementById('result');
finalWord.textContent = randomWord;

