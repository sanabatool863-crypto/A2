import React, { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function CheckoutScreen() {
    const user_id = 1;
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        API.get(`/cart/${user_id}`).then(res => setCart(res.data)).catch(err => console.error(err));
        API.get(`/users/${user_id}`).then(res => {
            setAddress(res.data.address || '');
            setPhone(res.data.phone || '');
        }).catch(() => { });
    }, []);

    const placeOrder = () => {
        if (cart.length === 0) return alert('Cart is empty');
        const items = cart.map(it => ({ product_id: it.product_id, quantity: it.quantity, price: it.price }));
        const total_amount = items.reduce((s, i) => s + i.price * i.quantity, 0);
        API.post('/orders/place', { user_id, items, total_amount })
            .then(res => navigate(`/order-confirmation/${res.data.order_id}`))
            .catch(err => console.error(err));
    };

    return (
        <div style={{ padding: 24 }}>
            <h1>Checkout</h1>
            <div style={{ maxWidth: 600 }}>
                <label>Shipping Address</label><br />
                <textarea value={address} onChange={e => setAddress(e.target.value)} style={{ width: '100%', height: 80 }} />
                <br /><label style={{ marginTop: 12 }}>Phone</label><br />
                <input value={phone} onChange={e => setPhone(e.target.value)} style={{ width: '100%', padding: 8 }} />
                <br /><br />
                <button onClick={placeOrder} style={{ padding: '10px 14px', background: '#198754', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
                    Place Order
                </button>
            </div>
        </div>
    );
}
