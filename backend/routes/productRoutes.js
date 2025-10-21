import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).json({ message: "Product not found" });
        res.json(results[0]);
    });
});

export default router;
