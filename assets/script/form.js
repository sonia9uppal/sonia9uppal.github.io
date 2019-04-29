var textArea = document.getElementById('phrases');
textArea.value="";
textArea.focus();

//textArea.select();
var submitButton = document.getElementById('submitButton');
var phrases;
let phraseArray;

/* Include date on phrase cards if time permits

var months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var year = curr.getFullYear()+'-'+(curr.getMonth()+1)+'-'+curr.getDate();
var month = months[curr.getMonth()]; // String name of months
var day = curr.getDate();
*/

submitButton.addEventListener('click', function() {
  phrases = document.getElementById('phrases').value;
  phraseArray = phrases.split(',');
  for (phrase of phraseArray) {
    phrase.trim();
  }
});

/*submitButton.onClick = function({
  console.log('button has been clicked');
});*/

/*let phraseArray = phrases.split(',');
for (phrase of phraseArray) {
  phrase.trim();
}

let newPhraseText = document.createElement("p");*/
