const db = require("../models/database");
require("dotenv").config({ path: __dirname + "/../.env" });

async function testDb() {
    console.log("DB config:", {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });

    try {
        const res = await db.query("SELECT * FROM crud");
        console.log("Database connection successful. Sample data:", res.rows);
    } catch (err) {
        console.error("Database connection error:", err);
    } finally {
        db.end();
    }
}

testDb();