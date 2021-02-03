/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const app = express();

const db = require('./db.json');

app.get('api/images', function (req, res) {
  res.send(db.images);
});

app.get('api/image/*', function (req, res) {
  res.send(db.images);
});

app.listen(9001, () => {
  console.log('Mock server running on 9001');
});
