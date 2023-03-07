import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const getProducts = async () =>{
    const response = await axios.get(`${BASE_URL}/products`);
    // console.log(response.data.length);
    return response.data;
}

export {getProducts};

