document.addEventListener("DOMContentLoaded", function() {
    const url = 'https://api.funtranslations.com/translate/pirate.json?text=Hello%2C%20world!';
    const outputElement = document.getElementById("output2");
  
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        const translatedText = data.contents.translated;
        outputElement.innerHTML = "FETCH Output: " + translatedText;
      })
      .catch(error => console.log('Error:', error));
  });
  
