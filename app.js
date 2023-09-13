require("dotenv").config();

//import the express.js framework
const express = require("express");
const cors = require("cors");

//connecting our mongo database
const connectDB = require("./config/db");

//Define middlewares and router
const personRoutes = require("./routes/persons");
const errorHandler = require("./middlewares/error");


// Connect to DB
connectDB();

// Express App
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", personRoutes);

app.use("/", (req, res) => {
  return res.json({
    message: "Welcome to this REST API with basic CRUD operations using ExpressJS and MongoDB"
  });
});

app.use(errorHandler);

const server = app.listen(port, () =>
  console.log(`Server started listening on ${port}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});