const sentences = ['', 'Dedicated', 'Driven', 'Software Engineer'];
let index = 0;


const typeWriter = function() {
  const sentence = sentences[index % sentences.length];
  document.querySelector('.sentence').innerHTML = ' ';
  
  let i = 0;
  const interval = setInterval(function() {
    document.querySelector('.sentence').innerHTML += sentence.charAt(i);
    document.querySelector('#caret').style.visibility ="visible";
    i++;
    if (i >= sentence.length) {
      clearInterval(interval);
      index++;
      document.querySelector('#caret').style.visibility = "visible";
      setTimeout(typeWriter, 1250);
    }
}, 90);
};

typeWriter();
