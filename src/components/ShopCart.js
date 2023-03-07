import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

//Components
import Cart from './shared/Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

// Styles
import styles from './ShopCart.module.css'

const ShopCart = () => {
    const {state, dispatch } = useContext(CartContext);
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            <div className={styles.paymentDetails}>
            {
                state.itemsCounter > 0 && <div>
                    <p> <span>Total Items:</span> {state.itemsCounter}</p>
                    <p> <span>Total Peyments:</span> {state.total} $</p>
                    <div className={styles.btnContainer}>
                        <button className={styles.clearBtn} onClick={() => dispatch({type:"CLEAR"})} >Clear</button>
                        <button className={styles.checkoutBtn} onClick={() => dispatch({type:"CHAECKOUT"})} >Checkout</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.checkout}>
                    <h3>Checked out Succesfully</h3>
                    <Link to="/products" >Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter === 0 && <div>
                    <h3>Want to buy more?</h3>
                    <Link to="/products" >Go back to Shop</Link>
                </div>
            }
            </div>
        </div>
    );
};

export default ShopCart;