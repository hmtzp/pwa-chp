import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.module.css';

const ProductCard = ({ name, image, rating, price }) => (
    <div className="product-card">
        <img src={image} alt={name} className="product-image" />
        <h2 className="product-name">{name}</h2>
        <div className="product-rating">Rating: {rating}</div>
        <div className="product-price">${price}</div>
    </div>
);

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
};

export default ProductCard;