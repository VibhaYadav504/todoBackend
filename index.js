const express = require('express');
const app = express();
require("dotenv").config(); 

const PORT = process.env.PORT || 4000;

const dbConnect = require("./config/database");
dbConnect(); 

app.use(express.json()); 

const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes); 

app.get("/", (req, res) => {
    res.send("Welcome to my todo app");
});

app.listen(PORT, () => {
    console.log(`Server started successfully at port ${PORT}`);
});
