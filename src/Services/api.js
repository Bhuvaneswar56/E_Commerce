import axios from 'axios'

const E_COMMERCE_INSTANCE = axios.create({
    baseURL: 'https://dummyjson.com/',
});

export default E_COMMERCE_INSTANCE;