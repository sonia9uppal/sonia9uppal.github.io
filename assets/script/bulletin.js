backButton = document.getElementById('backButton');
backButton.addEventListener('click', function() {
  window.location.href="./form.html";
});

cardContainer = document.getElementById('card-container');

var request = new XMLHttpRequest()
request.open('GET', 'https://31ogaol5hd.execute-api.us-west-1.amazonaws.com/dev/phrases', true)
request.onload = function() {
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status< 400) {
    data.forEach(phrase => {
      var card = document.createElement('div');
      card.setAttribute('class', 'fl tc pv4 card');

      var h3 = document.createElement('h3');
      h3.textContent = "\"" + phrase + "\"";

      card.appendChild(h3);
      cardContainer.appendChild(card);
    });

  } else {
    console.log('The request status is ' + request.status);
  }
}

request.send()
