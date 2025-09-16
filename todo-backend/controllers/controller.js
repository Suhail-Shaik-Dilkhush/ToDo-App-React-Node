const Todo = require('../models/todoModel');

exports.getAllTodos = async (req, res) => {

    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    }

    catch (error) {
        res.status(500).json({ message: error.message });
    }

}

exports.addTodo = async (req, res) => {

    try {
        const title = req.body.title;

        const newTodo = new Todo({
            title: title
        })

        const saveTodo = await newTodo.save();
        res.status(201).json(saveTodo);
    } catch {
        res.status(500).json({ message: error.message });
    }
}