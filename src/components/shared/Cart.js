import React, { useContext } from 'react';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Functions
import {shorten} from '../../helper/functions';

// Icons
import trashIcone from '../../assets/icons/trash.svg';

// Styles
import styles from './Cart.module.css';

const Cart = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = props.data;
    
    return (
        <div className={styles.container}>
            <img src={image} alt="product" />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price}</p>
            </div>
            <div className={styles.itemQuantity}>
                <span>{quantity}</span>
            </div>
            <div className={styles.btnContainer}>
                {
                    quantity > 1 ?
                    <button className={styles.minusBtn} onClick={() => dispatch({type : "DECREASE", payload: props.data })} >-</button> :
                    <button className={styles.trashBtn} onClick={() => dispatch({type : "REMOVE_ITEM", payload: props.data })} ><img src={trashIcone} alt="trashIcon"/></button>
                }
                <button className={styles.plusBtn} onClick={() => dispatch({type : "INCREASE", payload: props.data })} >+</button>
            </div>
        </div>
    );
};

export default Cart;