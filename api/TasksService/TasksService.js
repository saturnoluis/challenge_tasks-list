const fetch = require('node-fetch');
const crypto = require('crypto');

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

  getTasks(limit = this.limit) {
    const N = parseInt(limit); // number of tasks to return or fetch
    const theresEnoughTasks = this.tasks.length >= N;

    return new Promise((resolve, reject) => {
      if(theresEnoughTasks) {
        console.log(`Returned ${N} tasks from local state.\n`);
        return resolve(this.tasks.slice(0, N));
      }

      console.log(`Requesting ${N} new tasks from source...`);
      const urlParams = new URLSearchParams({ quantity: N });
      const fetchURL = `${SOURCE_URL}?${urlParams}`;

      fetch(fetchURL)
        .then(fetchResponse => fetchResponse.json())
        .then((response) => {
          this.tasks = response.map(generateTask)

          console.log('Done.\n')
          return resolve(this.tasks);
        })
        .catch(reject);
    });
  }
}