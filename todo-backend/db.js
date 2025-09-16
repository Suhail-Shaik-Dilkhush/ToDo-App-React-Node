const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        await mongoose.connect("mongodb+srv://todo-admin:5EHuDMb2RkKmmrbA@todo-app-db.owf3yag.mongodb.net/?retryWrites=true&w=majority&appName=ToDo-App-DB")
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

module.exports = connectDB;