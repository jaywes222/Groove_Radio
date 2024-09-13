import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ onClose, title, children }) => {
    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-black hover:text-gray-500 focus:outline-none"
                    onClick={onClose}
                >
                    &times;
                </button>
                {/* Modal Title */}
                <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
                {/* Modal Content */}
                <div className='text-lg'>{children}</div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
