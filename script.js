let counter = document.querySelector('h1');
let count = 5;

setInterval(()=>{

  counter.innerText = count;
  count--;
  
  // You put your URL where it says location.replace in the quotes.
  if (count < 1) location.replace('hello.html')

},1000)
