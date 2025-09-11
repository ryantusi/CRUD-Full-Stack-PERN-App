const { Pool } = require("pg");
require("dotenv").config({ path: __dirname + "/../.env" });

const db = new Pool({
  connectionString: process.env.DATABASE_URL, // Neon
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

module.exports = db;