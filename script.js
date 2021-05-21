let counter = document.querySelector('h1');
let count = 0;

setInterval(()=>{

  counter.innerText = count;
  count--;
  
  // You put your URL where it says location.replace in the quotes.
  if (count < 1) location.replace('https://xitzdiamondx.github.io')

},1000)
