import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function OrderConfirmation() {
    const { orderId } = useParams();
    return (
        <div style={{ padding: 24, textAlign: 'center' }}>
            <h1>Thank you for your order!</h1>
            <p>Order ID: <strong>{orderId}</strong></p>
            <p>Estimated delivery: 3-5 business days</p>
            <Link to="/"><button style={{ marginTop: 12, padding: '8px 12px', borderRadius: 6 }}>Back to Home</button></Link>
        </div>
    );
}
