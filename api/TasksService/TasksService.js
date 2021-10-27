const fetch = require('node-fetch');
const crypto = require('crypto');
const { isArray, isEmpty } = require('lodash');

const SOURCE_URL = 'https://lorem-faker.vercel.app/api';

const generateTask = title => ({
  title,
  uuid: crypto.randomUUID(), 
});

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
          console.log(response, `!${isEmpty(response)} || !${isArray(response)}`)
          if(!isEmpty(response) && !isArray(response)) {
            return resolve(this.tasks);
          }

          this.tasks = response.map(generateTask)
          return resolve(this.tasks);
        })
        .catch(reject);
    });
  }
}