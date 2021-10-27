const express = require('express');
const cors = require('cors');

const TasksService = require('./TasksService');

const PORT = 2700;

(async () => {
  console.log('✨ Starting API...');

  const app = express();
  
  app.use(cors());

  const tasksService = new TasksService();

  app.get('/tasks', async (req, res) => {
    const tasks = await tasksService.getTasks();

    res.send(tasks);
  });

  app.get('/tasks/:quantity', async (req, res) => {
    const { quantity } = req.params;
    const tasks = await tasksService.getTasks(quantity);

    res.send(tasks);
  });

  app.listen(PORT, () => {
    console.log(`⚡ API running on port:${PORT}\n`);
  });

  // end
})();