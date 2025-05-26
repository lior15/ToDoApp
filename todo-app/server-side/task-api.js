const express = require('express');
const router = express.Router();
const Task = require('./task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
})

router.post('/', async (req, res) => {
    const tasks = await Task.create(req.body);
    res.json(tasks);
})

router.put('/:id', async (req, res) => {
    debugger;
    const task = await Task.findOneAndUpdate({id: req.params.id}, req.body, { new: true });
    res.json(task);
})

router.delete('/:id', async (req, res) => {
    debugger;
    await Task.findOneAndDelete({id: req.params.id});
    res.sendStatus(204);
})

module.exports = router;