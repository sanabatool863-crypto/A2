import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 20px', background: '#0d6efd', color: '#fff', flexWrap: 'wrap'
        }}>
            <div>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 18 }}>LuxeTech Store</Link>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                <Link to="/categories" style={{ color: '#fff', textDecoration: 'none' }}>Categories</Link>
                <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Cart</Link>
                <Link to="/profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</Link>
            </div>
        </nav>
    );
}
