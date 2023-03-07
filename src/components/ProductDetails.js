import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { ProductContext } from '../context/ProductContextProvider';
import { CartContext } from '../context/CartContextProvider';

//Function
import { isInCard, quantityCount } from '../helper/functions';

// Icons
import trachIcon from '../assets/icons/trash.svg';

// Styles
import styles from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductContext);
    const {state, dispatch} = useContext(CartContext);
    const product = data[id-1];
    const {title , image , price , description , category} = product;
    return (
        <div className={styles.container}>
            <img src={image} alt='product' />
            <div className={styles.detailsContainer}>
                <h2>{title}</h2>
                <p className={styles.desc}>{description}</p>
                <p className={styles.cat}> <span>Category:</span> {category}</p>
                <div className={styles.btnContainer}>
                    <span className={styles.price}>{price} $</span>
                    <div className={styles.btns}>
                        {quantityCount(state, product.id) > 1 && <button className={styles.minusBtn} onClick={() => dispatch({type:"DECREASE", payload: product})}>-</button>}
                        {quantityCount(state, product.id) === 1 && <button className={styles.trashBtn} onClick={() => dispatch({type:"REMOVE_ITEM", payload: product})}><img src={trachIcon} alt="trashIcon"/></button>}
                        {quantityCount(state, product.id) > 0 && <span>{quantityCount(state, product.id)}</span>}
                        {
                            isInCard(state, product.id) ?
                            <button className={styles.plusBtn} onClick={() => dispatch({type:"INCREASE", payload: product})}>+</button> :
                            <button onClick={() => dispatch({type:"ADD_ITEM", payload: product})}>Add to Cart</button> 
                        }
                    </div>
                </div>
            </div>
            <Link className={styles.backLink} to="/products">Back to shop</Link>
        </div>
    );
};

export default ProductDetails;