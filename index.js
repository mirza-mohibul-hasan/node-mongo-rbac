const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/dbConnect");

// Connect Database
dbConnect();
// Middlewares
app.use(express.json());

// Routes

// Starter
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
