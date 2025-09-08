const Todo = require("../models/Todo");

// Get All Todos
exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({
            success: true,
            data: todos,
            message: "All Todo data fetched successfully"
        });
    } catch (err) {
        console.error("Error fetching todos:", err);
        res.status(500).json({
            success: false,
            message: "Server Error while fetching todos"
        });
    }
};

// Get Todo By ID
exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Todo found with the given ID"
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} fetched successfully`
        });

    } catch (err) {
        console.error("Error fetching todo by ID:", err);
        res.status(500).json({
            success: false,
            message: "Server Error while fetching todo by ID"
        });
    }
};
