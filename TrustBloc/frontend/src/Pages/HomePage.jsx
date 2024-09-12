import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import ProductCategory from '../components/ProductCategory';
import './HomePage.css';

const HomePage = ({ signOut }) => {
    const [cart, setCart] = useState([]);
    const categories = [
        { id: 1, price: 14.99, name: 'Earphones', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572990352299' },
        { id: 2, price: 360.99,name: 'Smartphone', image: 'https://media.ldlc.com/ld/products/00/05/43/97/LD0005439771_2_0005439871.jpg' },
        { id: 3, price: 200.99, name: 'Smartwatch', image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg' },
        { id: 4, price: 999.99, name: 'Laptops', image: 'https://i5.walmartimages.com/asr/55efd929-9e73-46b0-be7d-96ddae36860b.675c5c182840401413f6ab1c8e09d67c.jpeg' },
    ];
    const deals = [
        { id: 1, name: 'Deal: VR Glasses', image: 'https://cdn0.woolworths.media/content/wowproductimages/large/1074297510.jpg' },
        { id: 2, name: 'Deal 2', image: 'https://via.placeholder.com/200' },
        { id: 3, name: 'Deal 3', image: 'https://via.placeholder.com/200' },
    ];

    const addToCart = (id) => {
        setCart([...cart, id]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(itemId => itemId !== id));
    };

    return (
        <div>
            <Navbar cartCount={cart.length} signOut={signOut}/>
            <Carousel deals={deals} addToCart={addToCart} />
            <div className="homepage-grid">
                {categories.map((category, index) => (
                    <ProductCategory 
                        key={category.id} 
                        category={category} 
                        addToCart={() => addToCart(category.id)} 
                        removeFromCart={() => removeFromCart(category.id)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
