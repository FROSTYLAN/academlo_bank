const express = require('express');

// utils
const { db } = require('./utils/database');

const app = express();

db.authenticate()
  .then(() => {
    console.log('Database authenticated');
  })
  .catch(err => console.log(err));

db.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.log(err));

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
