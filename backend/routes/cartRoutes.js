import express from "express";
import db from "../db.js";
const router = express.Router();

router.post("/add", (req, res) => {
    const { user_id, product_id, quantity } = req.body;
    db.query(
        "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)",
        [user_id, product_id, quantity],
        (err) => {
            if (err) return res.status(500).send(err);
            res.send("Item added to cart");
        }
    );
});

router.get("/:user_id", (req, res) => {
    db.query(
        "SELECT c.*, p.name, p.price, p.image_url FROM cart c JOIN products p ON c.product_id = p.id WHERE c.user_id = ?",
        [req.params.user_id],
        (err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        }
    );
});

router.delete("/remove/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM cart WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.error("Error removing item:", err);
            return res.status(500).json({ message: "Database error" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.json({ message: "Item removed successfully" });
    });
});

router.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    if (quantity < 1) {
        return res.status(400).json({ message: "Quantity must be at least 1" });
    }

    db.query(
        "UPDATE cart SET quantity = ? WHERE id = ?",
        [quantity, id],
        (err, result) => {
            if (err) {
                console.error("Error updating quantity:", err);
                return res.status(500).json({ message: "Database error" });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Item not found" });
            }

            res.json({ message: "Quantity updated successfully" });
        }
    );
});

export default router;
