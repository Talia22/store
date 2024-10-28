import React, { useEffect, useState } from 'react';
import Styles from './Electronics.module.css'
import {getElectronicsProducts} from '../../Services/store.js'


const Electronics = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getElectronicsProducts()
            .then(res => res.json())
            .then(data => setProducts(data));
        }, []);

    return (
    <div>
        <h1>Electronics</h1>
        <div className={Styles.productsContainer}>
            {products.map(product => (
            <div key={product.id} className={Styles.product}>
                <div className={Styles.prodTitleBox}>
                    <h2 className={Styles.prodTitle}>{product.title}</h2>
                </div>
                <p>{product.price}$</p>
                <img src={product.image} alt={product.title} className={Styles.prodImg} />
            </div>
        ))}
        </div>
    </div>
    );
};


export default Electronics;








