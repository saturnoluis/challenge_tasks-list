const express = require('express');
const cors = require('cors');

const { getTasks } = require('./tasks');

(async () => {
  console.log('✨ Starting API...');

  const app = express();
  const port = 2700;
  
  app.use(cors());

  app.get('/tasks', async (req, res) => {
    const tasks = await getTasks();

    res.send(tasks);
  });

  app.get('/tasks/:quantity', async (req, res) => {
    const { quantity } = req.params;
    const tasks = await getTasks(quantity);

    res.send(tasks);
  });

  app.listen(port, () => {
    console.log(`⚡ API running on port:${port}\n`);
  });

  // end
})();