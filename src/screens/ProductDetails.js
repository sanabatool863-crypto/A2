import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        API.get(`/products/${id}`).then(res => setProduct(res.data)).catch(err => console.error(err));
    }, [id]);

    const addToCart = () => {
        const user_id = 1;
        API.post('/cart/add', { user_id, product_id: product.id, quantity: 1 })
            .then(() => { alert('Added to cart'); navigate('/cart'); })
            .catch(err => console.error(err));
    };

    if (!product) return <div style={{ padding: 24 }}>Loading...</div>;

    return (
        <div style={{ padding: 24, display: 'flex', gap: 20 }}>
            <div style={{ flex: 1 }}>
                <img src={product.image_url} alt={product.name} style={{ width: '100%', maxWidth: 480, objectFit: 'contain', borderRadius: 8 }} />
            </div>
            <div style={{ flex: 1 }}>
                <h2>{product.name}</h2>
                <p style={{ fontWeight: 700, color: 'green' }}>${product.price}</p>
                <p>{product.description}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Stock:</strong> {product.stock}</p>
                <button onClick={addToCart} style={{ padding: '10px 14px', background: '#198754', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
