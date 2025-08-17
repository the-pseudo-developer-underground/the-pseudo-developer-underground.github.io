fetch('quotes.json')
  .then(res => res.json())
  .then(quotes => {
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      const today = new Date().getDate();
      const index = today % quotes.length;
      quoteElement.textContent = quotes[index];
    }
  })
  .catch(err => {
    console.error('Failed to load quotes:', err);
  });


// Easter egg
const egg = document.getElementById('easter-egg');
if (egg) {
  egg.addEventListener('click', () => {
    window.location.href = 'secret.html'; // Create your special page
  });
}

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js')
    .then(()=>console.log('Service Worker Registered'));
}

