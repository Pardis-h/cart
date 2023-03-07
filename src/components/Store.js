import React ,{ useContext } from 'react';

//Components
import Product from './shared/Product';
import Loader from './shared/Loader';

// Context 
import { ProductContext } from '../context/ProductContextProvider';

// Styles
import styles from './Store.module.css';

const Store = () => {

    const products = useContext(ProductContext);

    return (
        <div className={styles.container}>
            {
            products.length ? 
            products.map(product => <Product 
                                        key={product.id} 
                                        productData={product}
                                    />) :
                <Loader/>
            }
        </div>
    );
};

export default Store;