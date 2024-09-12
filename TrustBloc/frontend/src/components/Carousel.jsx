import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ deals }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % deals.length);
        }, 3000);

        return () => clearInterval(intervalId); // Cleanup function
    }, [deals.length]);

    const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % deals.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + deals.length) % deals.length);
    };

    return (
        <div className="carousel-container" style={{ padding: '1rem', width: '70%', margin: '2rem auto', position: 'relative' }}>
            <FaChevronLeft onClick={handlePreviousImage} style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', cursor: 'pointer' }} />
            <div className="carousel-images" style={{ overflow: 'hidden', position: 'relative', height: '300px' }}>
                {deals.map((deal, index) => (
                    <div key={index} style={{ width: '100%', height: '100%', position: 'absolute', left: `${index * 100}%`, transition: 'left 0.5s ease-in-out' }} className={index === currentImageIndex ? 'active' : ''}>
                        <img src={deal.image} alt={deal.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="carousel-description" style={{ position: 'absolute', bottom: '0', left: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', width: '100%', padding: '0.5rem', textAlign: 'center' }}>
                            {deal.name}
                        </div>
                    </div>
                ))}
            </div>
            <FaChevronRight onClick={handleNextImage} style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', cursor: 'pointer' }} />
        </div>
    );
};

export default Carousel;
