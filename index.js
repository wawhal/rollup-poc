const fetch = require('node-fetch');

fetch('https://www.google.com').then(r => {
  r.text().then(r => {
    console.log(r);
  });
});