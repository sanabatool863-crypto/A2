import express from "express";
import db from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, email, password, address, phone } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    db.query(
        "INSERT INTO users (name, email, password, address, phone) VALUES (?, ?, ?, ?, ?)",
        [name, email, hashed, address, phone],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send("User registered successfully");
        }
    );
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(401).send("User not found");
        const valid = await bcrypt.compare(password, results[0].password);
        if (!valid) return res.status(401).send("Invalid password");

        const token = jwt.sign({ id: results[0].id }, "secretkey");
        res.json({ token, user: results[0] });
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    db.query("SELECT id, name, email, address, phone FROM users WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).json({ message: "User not found" });
        res.json(results[0]);
    });
});

export default router;
