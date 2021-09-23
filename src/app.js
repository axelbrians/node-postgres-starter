const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World with docker-compose.dev.yml');
});

app.get('/about', (req, res) => {
  res.json({
    "user": "axelbrians",
    "link": "/localhost"
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});