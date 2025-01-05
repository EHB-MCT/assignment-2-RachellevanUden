require("dotenv").config();
const mongoose = require("mongoose");

// Connection string from MongoDB Atlas
const connectionString = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

// Logging for debugging
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {});

module.exports = mongoose;
