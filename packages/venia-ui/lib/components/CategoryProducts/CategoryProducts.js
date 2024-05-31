import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_CATEGORY } from '../queries';
import ProductCard from '../ProductCard/ProductCard';

const CategoryProducts = ({ category }) => {
    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: { category }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="category-products">
            {data.products.items.map(product => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    image={product.image.url}
                    rating={product.rating}
                    price={product.price.regularPrice.amount.value}
                />
            ))}
        </div>
    );
};

export default CategoryProducts;
