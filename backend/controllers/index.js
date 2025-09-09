const db = require("../models/database");
const { fieldValidator } = require("../utils/util");

exports.read = async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM crud");
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};

exports.create = async (req, res) => {
    const { name, job, status } = req.body;
    if(fieldValidator(req.body)) {
        return res.status(400).json(fieldValidator(req.body));
    }
    try {
        const newExpense = await db.query(
            'INSERT INTO crud (name, job, status, created_at) VALUES ($1, $2, $3, NOW())',
            [name, job, status]
        );
        return res.status(201).json(newExpense.rows[0]);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Database error", message: err.message });
    }    
};

exports.update = async (req, res) => {
    const id = Number(req.params.id);
    const { name, job, status } = req.body;
    if(fieldValidator(req.body)) {
        return res.status(400).json(fieldValidator(req.body));
    }
    try {
        await db.query(
            'UPDATE crud SET name = $1, job = $2, status = $3 WHERE id = $4', 
            [name, job, status, id]
        );
        return res.status(200).send(`User Modified with ${id}`);
    } catch (err) {
        return res.status(400).json({ err });
    }
};

exports.remove = async (req, res) => {
    const id = Number(req.params.id);
    try {
        await db.query(
            'DELETE FROM crud WHERE id = $1',
            [id]
        );
        return res.status(200).send(`User deleted with ID: ${id}`);
    } catch (err) {
        return res.status(400).json({ err: err.message });
    }
};