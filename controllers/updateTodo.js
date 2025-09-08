const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title, description, updatedAt: Date.now() },
            { new: true } // return updated doc
        );

        res.status(200).json({
            success: true,
            data: updatedTodo,
            message: "Todo updated successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};
