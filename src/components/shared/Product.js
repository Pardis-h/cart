import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Function
import { shorten, isInCard, quantityCount } from '../../helper/functions';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import trachIcon from '../../assets/icons/trash.svg';

// Styles
import styles from './Product.module.css';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={productData.image} alt='product' />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`} >Details</Link>
                <div className={styles.btnContainer}>
                    {quantityCount(state, productData.id) > 1 && <button className={styles.minusBtn} onClick={() => dispatch({type:"DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button className={styles.trashBtn} onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})}><img src={trachIcon} alt="trashIcon"/></button>}
                    {quantityCount(state, productData.id) > 0 && <span>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCard(state, productData.id) ?
                        <button className={styles.plusBtn} onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type:"ADD_ITEM", payload: productData})}>Add to Cart</button> 
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;