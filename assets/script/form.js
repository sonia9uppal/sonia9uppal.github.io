var submitButton = document.getElementById('submitButton');
var phrases = document.getElementById('phrases').value;
console.log(phrases);

submitButton.addEventListener('click', function() {
  log('button clicked');
});

/*submitButton.onClick = function({
  console.log('button has been clicked');
});*/

let phraseArray = phrases.split(',');
for (phrase of phraseArray) {
  phrase.trim();
}

let newPhraseText = document.createElement("p");
