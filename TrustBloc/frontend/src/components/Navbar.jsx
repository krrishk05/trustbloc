import React from 'react';
import { useState } from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Cart from './Cart';

const Navbar = ({ cartCount, signOut }) => {
    const [showCart, setShowCart] = useState(false);
    const navStyle = {
        backgroundColor: '#2d3748', // Tailwind's bg-gray-800
        padding: '1rem', // Tailwind's p-4
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'fixed', // Ensure the navbar stays at the top
        top: 0,
        left: 0,
        zIndex: 1000, // Ensure it stays above other content
    };

    const textStyle = {
        color: 'white', // Tailwind's text-white
        fontSize: '1.25rem', // Tailwind's text-xl
    };

    const iconContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginRight: '3rem',
    };

    const iconStyle = {
        color: 'white', // Tailwind's text-white
        fontSize: '1.5rem', // Tailwind's text-2xl
    };

    const buttonStyle = {
        backgroundColor: '#4a5568', // Tailwind's bg-gray-600
        color: 'white', // Tailwind's text-white
        border: 'none',
        padding: '0.5rem 1rem',
        fontSize: '1rem', // Tailwind's text-base
        cursor: 'pointer',
        borderRadius: '0.25rem', // Tailwind's rounded
    };

    const cartCountStyle = {
        position: 'absolute',
        top: '0',
        right: '1rem',
        backgroundColor: '#e53e3e', // Tailwind's bg-red-600
        color: 'white', // Tailwind's text-white
        borderRadius: '50%', // Tailwind's rounded-full
        width: '.55rem', // Tailwind's w-5
        height: '.55rem', // Tailwind's h-5
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.55rem', // Tailwind's text-xs
    };

    const handleCartIconClick = () => {
        setShowCart(true); // Toggle cart modal visibility
    };

    return (
        <nav style={navStyle}>
            <div style={textStyle}>TrustBloc</div>
            <div style={iconContainerStyle}>
                <div style={{ position: 'relative' }}>
                    <FaShoppingCart style={iconStyle} onClick={handleCartIconClick} />
                    {cartCount > 0 && (
                        <span style={cartCountStyle}>{cartCount}</span>
                    )}
                </div>
                <FaUserCircle style={iconStyle} />
                <button style={buttonStyle} onClick={signOut}>Logout</button>
            </div>
            {showCart && <Cart />}
        </nav>
    );
};

export default Navbar;
