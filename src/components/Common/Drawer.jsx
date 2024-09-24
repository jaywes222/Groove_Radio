import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = ({ isOpen, closeDrawer, items }) => {
    return (
        <div
            className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-40`}
        >
            <div className="flex justify-end p-4">
                <button onClick={closeDrawer} className="text-white">
                    Close
                </button>
            </div>
            <ul className="space-y-4 p-4">
                {items.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.link}
                            onClick={closeDrawer}
                            className="block p-2 hover:bg-gray-700"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Drawer;
