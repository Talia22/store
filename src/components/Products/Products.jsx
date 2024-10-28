import React, { useEffect, useState } from 'react';
import Styles from './Products.module.css'
import {getProductDetails} from '../../Services/store.js'

const Products = ({category}) => {
    console.log(category)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductDetails(category)
            .then((res) => res.json())
            .then((data) => {setProducts(data);
            });
    },[category]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


    return (
    <div>
        <h1>{capitalizeFirstLetter(category)}</h1>
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


export default Products;








