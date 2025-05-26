const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { console } = require('inspector');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/tasks', require('./task-api'));

mongoose.connect('mongodb://localhost:27017/todo-app');
const server = app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

