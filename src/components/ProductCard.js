import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <div style={{
            border: '1px solid #eee', borderRadius: 8, padding: 12, width: 260, textAlign: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
        }}>
            <img src={product.image_url} alt={product.name} style={{ width: '100%', height: 150, objectFit: 'contain', borderRadius: 6 }} />
            <h3 style={{ margin: '10px 0 6px' }}>{product.name}</h3>
            <p style={{ color: 'green', fontWeight: 600 }}>${product.price}</p>
            <Link to={`/product/${product.id}`}>
                <button style={{ padding: '8px 12px', background: '#0d6efd', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
                    View Details
                </button>
            </Link>
        </div>
    );
}
