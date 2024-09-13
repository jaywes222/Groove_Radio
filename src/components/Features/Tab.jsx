import React from 'react';

const Tab = ({ label, target, onClick, isActive }) => (
	<div
		className={`flex justify-center items-center cursor-pointer text-gray-600 border-b md:border-b-0 w-full md:w-1/4 
      ${isActive ? 'text-earthYellow border-earthYellow' : 'hover:text-earthYellow'}`}
		onClick={() => onClick(target)}
	>
		<div
			className={`py-3 md:py-5 border-b-4 w-full text-center ${isActive ? 'border-earthYellow' : 'border-transparent'
				}`}
			data-target={target}
		>
			{label}
		</div>
	</div>
);

export default Tab;
