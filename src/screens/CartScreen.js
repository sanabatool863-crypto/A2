import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function CartScreen() {
    const user_id = 1;
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const fetchCart = () => {
        API.get(`/cart/${user_id}`).then((res) => setCart(res.data)).catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const removeItem = (id) => {
        API.delete(`/cart/remove/${id}`).then(() => fetchCart()).catch((err) => console.error(err));
    };

    const updateQuantity = (id, qty) => {
        if (qty < 1) return;
        API.put(`/cart/update/${id}`, { quantity: qty }).then(() => fetchCart()).catch((err) => console.error(err));
    };

    const total = cart.reduce((s, it) => s + it.price * it.quantity, 0);

    return (
        <div style={{ padding: 24 }}>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty. <Link to="/">Continue shopping</Link></p>
            ) : (
                <>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {cart.map((item) => (
                            <div key={item.id} style={{ display: "flex", gap: 12, alignItems: "center", border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
                                <img src={item.image_url} alt={item.name} style={{ width: 100, height: 80, objectFit: "contain" }} />
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ margin: 0 }}>{item.name}</h3>
                                    <p style={{ margin: "6px 0" }}>${item.price}</p>
                                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        <button onClick={() => removeItem(item.id)} style={{ marginLeft: 12, color: "red" }}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 20, textAlign: "right" }}>
                        <h3>Total: ${total.toFixed(2)}</h3>
                        <button onClick={() => navigate("/checkout")} style={{ padding: "10px 14px", background: "#0d6efd", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
