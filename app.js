const express = require('express');
const app = express();
const port = 3000; // You can change this to your preferred port number

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes will be defined here

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



let tasks = {
    Personal: [],
    Professional: []
  };
  
  // Home page route
  app.get('/', (req, res) => {
    res.render('index', { tasks });
  });
  
  // Task creation route
  app.post('/create', (req, res) => {
    const { task, listType } = req.body;
    tasks[listType].push(task);
    res.redirect('/');
  });
  
  // Task completion route
  app.post('/complete', (req, res) => {
    const { completedTask, listType } = req.body;
    tasks[listType] = tasks[listType].filter((task) => task !== completedTask);
    res.redirect('/');
  });
  
  // ... (other routes if needed)
  
  // 404 Not Found route
  app.use((req, res) => {
    res.status(404).send('404 Not Found');
  });