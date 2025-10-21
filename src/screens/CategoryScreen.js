import React, { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function CategoryScreen() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        API.get('/products').then(res => {
            setProducts(res.data);
            const unique = [...new Set(res.data.map(p => p.category || 'Uncategorized'))];
            setCategories(unique);
        }).catch(err => console.error(err));
    }, []);

    const filterCategory = (cat) => {
        const filtered = products.filter(p => (p.category || 'Uncategorized') === cat);
        sessionStorage.setItem('filteredProducts', JSON.stringify(filtered));
        navigate('/');
    };

    return (
        <div style={{ padding: 24 }}>
            <h1>Categories</h1>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
                {categories.map((c, i) => (
                    <button key={i} onClick={() => filterCategory(c)} style={{ padding: '8px 12px', borderRadius: 6, cursor: 'pointer' }}>
                        {c}
                    </button>
                ))}
            </div>
        </div>
    );
}
