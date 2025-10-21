import React, { useEffect, useState } from 'react';
import API from '../api';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState(null);

    useEffect(() => {
        API.get('/products').then(res => setProducts(res.data)).catch(err => console.error(err));
    }, []);

    useEffect(() => {
        const f = sessionStorage.getItem('filteredProducts');
        if (f) {
            setFiltered(JSON.parse(f));
            sessionStorage.removeItem('filteredProducts');
        }
    }, []);

    const list = filtered || products;

    return (
        <div style={{ padding: 24 }}>
            <h1>Products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 16 }}>
                {list.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
        </div>
    );
}
