const fetch = require('node-fetch');
const SOURCE_URL = 'https://lorem-faker.vercel.app/api';

module.exports = class TasksService {
  constructor(limit) {
    this.tasks = [];
    this.limit = limit > 0 ? limit : 3;
  }

  getTasks(quantity = this.limit) {
    return new Promise((resolve, reject) => {
      const theresNoTasks = this.tasks.length > 0;
      const theresMoreTasksThanRequired = this.tasks.length >= quantity;

      if(theresNoTasks || theresMoreTasksThanRequired) {
        return resolve(this.tasks.slice(0, quantity));
      }

      const urlParams = new URLSearchParams({ quantity });
      const fetchURL = `${SOURCE_URL}?${urlParams}`;
      
      fetch(fetchURL)
        .then(fetchResponse => fetchResponse.json())
        .then((response) => {
          this.tasks = response;
          return resolve(response);
        })
        .catch(reject);
    });
  }
}