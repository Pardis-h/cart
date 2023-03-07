import React , { useState , useEffect , createContext} from 'react';

// API
import { getProducts } from '../services/api';

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }

        fetchAPI();
    },[]);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;