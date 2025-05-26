const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    id: String,
  title: String,
  completed: Boolean,
  dueDate: Date,
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    inEditMode: Boolean
})

module.exports = mongoose.model('Task', taskSchema);