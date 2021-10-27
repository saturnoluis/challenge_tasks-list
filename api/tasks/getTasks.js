const fetch = require('node-fetch');

const SOURCE_URL = 'https://lorem-faker.vercel.app/api';

function getTasks(quantity = 3) {
  return new Promise((resolve, reject) => {
    const urlParams = new URLSearchParams({ quantity });
    const fetchURL = `${SOURCE_URL}?${urlParams}`;
    
    fetch(fetchURL)
      .then(fetchResponse => fetchResponse.json())
      .then(resolve)
      .catch(reject);
  });
}

module.exports = getTasks;