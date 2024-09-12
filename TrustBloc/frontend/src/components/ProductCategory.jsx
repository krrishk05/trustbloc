import React from 'react';
import { useState } from 'react';

const ProductCategory = ({ category, addToCart, removeFromCart }) => {
    const [isInCart, setIsInCart] = useState(false);

    const handleCartClick = () => {
        if (isInCart) {
            removeFromCart(category.id);
        } else {
            addToCart(category.id);
        }
        setIsInCart(!isInCart);
    };

    const containerStyle = {
        border: '1px solid #ccc', // Tailwind's border
        padding: '1rem', // Tailwind's p-4
    };

    const headingStyle = {
        fontSize: '1.125rem', // Tailwind's text-lg
        fontWeight: 'bold', // Tailwind's font-bold
        marginBottom: '1rem', // Tailwind's mb-4
    };

    const spaceStyle = {
        marginBottom: '1rem', // Tailwind's space-y-4
    };

    const relativeStyle = {
        position: 'relative', // Tailwind's relative
    };

    const imageStyle = {
        width: '100%', // Tailwind's w-full
        height: '100%', // Tailwind's h-full
        objectFit: 'cover', // Tailwind's object-cover
    };

    const buttonStyle = {
        marginTop: '',
        position: 'absolute', // Tailwind's absolute
        bottom: '0', // Tailwind's bottom-0
        left: '0', // Tailwind's left-0
        backgroundColor: '#4299e1', // Tailwind's bg-blue-500
        color: 'white', // Tailwind's text-white
        padding: '0.5rem', // Tailwind's p-2
        width: '100%', // Tailwind's w-full
        border: 'none', 
        cursor: 'pointer', 
    };

    return (
    <div style={containerStyle}>
        <h2 style={headingStyle}>{category.name}</h2>
        <div style={spaceStyle}>
            <div style={relativeStyle}>
                <img src={category.image} alt={category.name} style={imageStyle} />
                <button
                    onClick={handleCartClick}
                    style={buttonStyle}>{isInCart ? 'Remove from Cart' : 'Add to Cart'}</button>
            </div>
        </div>
    </div>
    );
};

export default ProductCategory;
