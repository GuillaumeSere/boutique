import React, { useContext } from 'react';
import './ProductCard.css';
import Rating from './Rating';
import CartContext from '../context/cart/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext)
    return (
        <div className='productCard__wrapper'>
            <div>
                <img className='productCard__img' src={product.image} alt="" />
                <h4>{product.name}</h4>
                <div className='ProductCard__price'>
                     <h5>{product.price} €</h5>
                </div>
                <div className='ProductCard__Rateing'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </div>
                <button className='ProductCard__button' onClick={ () => addToCart(product) }>Ajouter au panier</button>
            </div>
        </div>
    );
};

export default ProductCard;