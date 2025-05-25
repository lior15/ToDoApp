const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
let todos = [];

app.get('/api/todos', (req, res) => {
    res.json({todos: todos});
});

app.post('/api/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        text: req.body.text,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const todo = todos.find(t => t.id === todoId);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todo.completed = req.body.completed;
    res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => { 
    const todoId = parseInt(req.params.id, 10);
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    todos.splice(todoIndex, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});