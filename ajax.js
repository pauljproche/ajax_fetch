document.getElementById("ajaxButton").addEventListener("click", function() {
  const xhr = new XMLHttpRequest();
  const url = 'https://api.funtranslations.com/translate/pirate.json?text=Hello%2C%20world!';

  xhr.open('GET', url, true);
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
    }
  };

  xhr.send();
});
