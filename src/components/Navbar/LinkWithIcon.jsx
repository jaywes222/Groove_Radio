import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWithIcon = ({ title, link, emoji }) => {
	return (
		<NavLink
			to={link}
			className="flex items-center space-x-2 text-gray-400 text-lg hover:text-earthYellow transition duration-300"
		>
			<span>{title}</span>
			<img src={emoji} alt={`${title} icon`} className="w-5 h-5" />
		</NavLink>
	);
};

export default LinkWithIcon;
