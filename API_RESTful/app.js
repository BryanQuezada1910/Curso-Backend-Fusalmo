const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        complete: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(task => task.id === parseInt(req.params.id));
    if (!task) {
        res.status(404).json({error: 'No se encontró la tarea solicitada'});
    } else {
        res.json(task);
    }
});

app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(task => task.id === parseInt(req.params.id));
    if (!task) {
        res.status(404).json({error: 'No se encontró la tarea solicitada'});
    } else {
        task.title = req.body.title;
        task.complete = req.body.complete !== undefined ? req.body.complete : task.complete;
        res.json(task);
    }
});

app.delete('/tasks/:id', (req, res) => {
    const task = tasks.find(task => task.id === parseInt(req.params.id));
    if (!task) {
        res.status(404).json({error: 'No se encontró la tarea solicitada'});
    } else {
        tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
        res.json({message: 'Tarea eliminada con éxito'});
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});