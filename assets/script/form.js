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
  formData = document.getElementById('phrases').value;
  // console.log(formData);
  phraseArray = formData.split(',');
  var phraseArraySplit = [];
  for (phrase of phraseArray) {
    phraseArraySplit.push(phrase.trim());
  }

  // console.log(phraseArraySplit);
  var jsonObj = {phrases: phraseArraySplit};
  console.log(jsonObj);
  var url = 'https://31ogaol5hd.execute-api.us-west-1.amazonaws.com/dev/phrases';

  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(jsonObj),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));

  window.location.href="./bulletin.html";

});



/*submitButton.onClick = function({
  console.log('button has been clicked');
});*/

/*let phraseArray = phrases.split(',');
for (phrase of phraseArray) {
  phrase.trim();
}

let newPhraseText = document.createElement("p");*/
