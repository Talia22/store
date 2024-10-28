import React from 'react';
import Styles from './HomeComp.module.css';

const HomeComp = () => {
    
    return (
        <div className={Styles.homeContainer}>
            <h1>Welcome to our Fake Store!</h1>
            <p>Your one-stop shop for the latest and greatest products.</p>
            <p>Explore our collections of electronics, jewelry, and more!</p>
            <p>Shop Now to discover amazing deals and exclusive offers!</p>
        </div>
    );
};

export default HomeComp;