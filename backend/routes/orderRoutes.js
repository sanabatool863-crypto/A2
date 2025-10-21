import express from "express";
import db from "../db.js";
const router = express.Router();

router.post("/place", (req, res) => {
    const { user_id, total_amount } = req.body;
    db.query(
        "INSERT INTO orders (user_id, total_amount, status) VALUES (?, ?, 'Pending')",
        [user_id, total_amount],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send("Order placed successfully");
        }
    );
});

router.get("/:user_id", (req, res) => {
    db.query("SELECT * FROM orders WHERE user_id = ?", [req.params.user_id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

export default router;
