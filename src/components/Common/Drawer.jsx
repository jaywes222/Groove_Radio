import React, { useState } from 'react';
import facebookIcon from '../../assets/icon-facebook.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import instagramIcon from '../../assets/icon-instagram.svg';
import LinkWithIcon from '../Navbar/LinkWithIcon';
import Jack from './Jack';
import { Link } from 'react-router-dom';

const Drawer = ({ isOpen, closeDrawer, items }) => {
    return (
        <div
            className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-40 flex flex-col justify-between`}
        >
            {/* Drawer Items */}
            <ul className="space-y-4 p-4 mt-14 flex-grow">
                {items.map((item, index) => (
                    <li key={index}>
                        <LinkWithIcon
                            title={item.title}
                            link={item.link}
                            emoji={item.emoji}
                            toggleDrawer={closeDrawer}  // Trigger close on item click
                            className='block p-2 hover:bg-gray-700'
                        />
                    </li>
                ))}
            </ul>

            {/* Footer with Social Icons and Copyright */}
            <div className="p-4">
                <div className="flex justify-center space-x-4 mb-4">
                    <Link to="https://facebook.com" target="_blank">
                        <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                    </Link>
                    <Link to="https://twitter.com" target="_blank">
                        <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                    </Link>
                    <Link to="https://instagram.com" target="_blank">
                        <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                    </Link>
                </div>
                <div className="text-center text-sm text-gray-400">
                    <Jack />
                </div>
            </div>
        </div>
    );
};

export default Drawer;
