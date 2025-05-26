const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    id: String,
  title: String,
  completed: Boolean,
  dueDate: Date
})

module.exports = mongoose.model('Task', taskSchema);