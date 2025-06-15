const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// CREATE
router.post('/', async (req, res) => {
  try {
    /*console.log('POST /api/tasks body:', req.body);*/
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    /*console.error('❌ Error in POST /api/tasks:', err);*/
    res.status(500).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ BY ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
