import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
    const [showCart, setShowCart] = useState(false);
    const [purchaseMessage, setPurchaseMessage] = useState('');

    const handleBuy = async () => {
        try {
            // Simulate a payment transaction
            const result = { success: true }; // Simulated result, replace with actual payment logic

            // Handle transaction confirmation
            if (result.success) {
                // Payment successful
                setPurchaseMessage(`Payment successful! You bought ${cartItems.length} items.`);
            } else {
                // Payment failed
                setPurchaseMessage('Payment failed!');
            }
        } catch (error) {
            console.error('Error:', error);
            setPurchaseMessage('Error occurred while processing payment.');
        }
    };

    const calculateTotal = () => {
        // Calculate the total amount based on cartItems
        let total = 0;
        cartItems.forEach(item => {
            total += item.price;
        });
        return total;
    };

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <div>
            {showCart && (
                <div className="cart-modal">
                    <div className="cart-content">
                        <button className="close-btn" onClick={toggleCart}><FaTimes /></button>
                        <h2>Cart</h2>
                        <div className="cart-items">
                            {cartItems && cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div>
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <button onClick={() => removeFromCart(item.id)}><FaTimes /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleBuy}>Buy Now</button>
                        {purchaseMessage && <p>{purchaseMessage}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
