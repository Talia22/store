import React, { useEffect, useState } from 'react';
import Styles from './Jewlery.module.css'
import {getJeweleryProducts} from '../../Services/store.js'


const Jewlery = () => {
    const [jewlery, setJewlery] = useState([]);

    useEffect(() => {
        getJeweleryProducts()
            .then(res => res.json())
            .then(data => setJewlery(data));
        }, []);

    return (
    <div>
        <h1>Jewlery</h1>
        <div className={Styles.productsContainer}>
            {jewlery.map(product => (
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


export default Jewlery;








