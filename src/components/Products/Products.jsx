import React, { useEffect, useState } from 'react';
import Styles from './Products.module.css'
import {getElectronicsProducts, getJeweleryProducts} from '../../Services/store.js'


const Products = ({ProdItem}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (ProdItem === "Jewelry") {
            getJeweleryProducts()
            .then((res) => res.json())
            .then((data) => {setProducts(data);
            });
        } else {
            getElectronicsProducts()
            .then((res) => res.json())
            .then((data) => {setProducts(data);
            });
        }
    }, [ProdItem]);


    return (
    <div>
        <h1>{ProdItem}</h1>
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








