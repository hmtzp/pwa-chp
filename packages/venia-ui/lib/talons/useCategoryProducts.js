import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_PRODUCTS_BY_CATEGORY } from '../queries';

const useCategoryProducts = (category) => {
    const [products, setProducts] = useState([]);
    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: { category },
    });

    useEffect(() => {
        if (data && data.products && data.products.items) {
            setProducts(data.products.items);
        }
    }, [data]);

    return { loading, error, products };
};

export default useCategoryProducts;
