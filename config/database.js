const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("DB ka Connection");
    } catch (error) {
        console.log("Issue in DB Connection");
        console.log(error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = dbConnect;
