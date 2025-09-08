const express = require("express");
require("dotenv").config();

const crudRoutes = require("./routes/crud");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", crudRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
