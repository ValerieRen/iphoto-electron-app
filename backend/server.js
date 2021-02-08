/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cors = require('cors');
const db = require('./db.json');
const app = express();
app.use(cors());

app.get('/api/images', function (req, res) {
  res.send(db.images);
});

app.get('api/image/*', function (req, res) {
  res.send(db.images);
});

app.listen(9001, () => {
  console.log('Mock server running on 9001');
});
