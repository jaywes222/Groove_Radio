import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWithIcon = ({ title, link, emoji, toggleMenu, toggleDrawer }) => {
	const handleClick = () => {
		if (toggleMenu) toggleMenu();
		if (toggleDrawer) toggleDrawer(); 
	};

	return (
		<NavLink
			to={link}
			className={({ isActive }) =>
				`flex items-center space-x-2 text-lg  transition duration-300 ${isActive ? 'bg-spanishOrange rounded-full py-2 px-4 text-white' : 'text-gray-400'}`
			}
			onClick={handleClick}
		>
			<span>{title}</span>
			<img src={emoji} alt={`${title} icon`} className="w-5 h-5" />
		</NavLink>
	);
};

export default LinkWithIcon;
