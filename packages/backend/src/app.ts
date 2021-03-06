const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
import { router } from './routes/index';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

mongoose.connect(process.env.DATABASE_URL, () =>
  console.log(`Connected to database`),
);
const db = mongoose.connection;

db.on('error', (error: string) => console.error(error));

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log('Server started on port ' + PORT));
