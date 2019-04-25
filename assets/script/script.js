var submitButton = document.getElementById('submitButton');
var phrases = document.getElementById('phrases');

submitButton.onClick = function({
  
});

let phraseArray = phrases.split(',');
phrases.forEach(function(phrase){
  phrase.trim();
});

let newPhraseText = document.createElement("p");
