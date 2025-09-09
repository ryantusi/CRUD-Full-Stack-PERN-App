const express = require("express");
const router = express.Router();

const {
    create,
    read,
    update,
    remove
} = require('../controllers/index');

// Example route
router.get("/", read);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/remove/:id", remove);

module.exports = router;
