/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
const { PORT = 3000 } = process.env;

//* * запуск сервера express.js и прослушивание запросов в порту*/
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));

mongoose.connect('mongodb://127.0.0.1:27017/diploma_db')
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.error('Error:', err));

app.use(express.json());
app.use(requestLogger);
app.use(router);
app.use(errorLogger);
