const express = require('express');
const config = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: config.message
  });
});

app.listen(config.port, config.host, () => console.log('Running...'));
