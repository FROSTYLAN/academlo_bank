const express = require('express');

// utils
const { db } = require('./utils/database');

// Controllers
const { globalErrorHandler } = require('./controllers/errors.controller');

// Routers
const { usersRouter } = require('./routes/users.routes');
const { transfersRouter } = require('./routes/transfers.routes');

const app = express();

// Enable incoming JSON data
app.use(express.json());

// Endpoint
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transfer', transfersRouter);

db.authenticate()
  .then(() => {
    console.log('Database authenticated');
  })
  .catch(err => console.log(err));

// Global error handler
app.use('*', globalErrorHandler);

db.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.log(err));

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
