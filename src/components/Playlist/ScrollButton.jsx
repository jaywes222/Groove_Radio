import React from 'react';

const ScrollButton = ({ direction, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-gray-700 p-2 rounded-full text-white"
        >
            {direction === 'left' ? 'Scroll Left' : 'Scroll Right'}
        </button>
    );
};

export default ScrollButton;