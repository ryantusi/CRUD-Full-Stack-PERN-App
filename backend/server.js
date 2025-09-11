const cors = require("cors");
const express = require("express");
require("dotenv").config();

const crudRoutes = require("./routes/crud");

const app = express();
const PORT = process.env.PORT || 8000;

//CORS Configuration
const allowedOrigin = process.env.FRONTEND_URL || "*";
app.use(cors());
app.use(cors({
  origin: allowedOrigin, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", crudRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
