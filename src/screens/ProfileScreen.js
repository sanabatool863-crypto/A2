import React, { useEffect, useState } from 'react';
import API from '../api';

export default function ProfileScreen() {
    const user_id = 1;
    const [user, setUser] = useState({});
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        API.get(`/users/${user_id}`).then(res => setUser(res.data)).catch(err => console.error(err));
        API.get(`/orders/${user_id}`).then(res => setOrders(res.data)).catch(err => console.error(err));
    }, []);

    return (
        <div style={{ padding: 24 }}>
            <h1>Profile</h1>
            <div style={{ marginBottom: 24 }}>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Address: {user.address}</p>
                <p>Phone: {user.phone}</p>
            </div>

            <h2>Order History</h2>
            {orders.length === 0 ? <p>No orders yet.</p> : (
                <div style={{ display: 'grid', gap: 12 }}>
                    {orders.map(o => (
                        <div key={o.id} style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
                            <p>Order ID: {o.id}</p>
                            <p>Total: ${o.total_amount}</p>
                            <p>Status: {o.status}</p>
                            <p>Date: {new Date(o.order_date).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
