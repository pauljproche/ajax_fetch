document.addEventListener("DOMContentLoaded", function() {
  const url = 'https://api.funtranslations.com/translate/pirate.json?text=Hello%2C%20world!';
  const outputElement = document.getElementById("output");

  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const translatedText = response.contents.translated;
      outputElement.innerHTML = "AJAX Output: " + translatedText;
    }
  };

  xhr.send();
});
