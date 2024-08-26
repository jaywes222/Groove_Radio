import React from 'react';

const CurrentShow = ({ show }) => {
	return (
		<div
			className="relative bg-cover bg-center rounded-lg shadow-lg p-4 text-white mb-8"
			style={{
				backgroundImage: 'url(/path/to/your/background-image.jpg)',
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="relative z-10 flex flex-col items-center justify-center h-full">
				<div className="mb-4">
					<svg
						className="w-16 h-16 text-white opacity-70"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 10h2l5 7 5-7h2m-4-7v18"
						/>
					</svg>
				</div>
				<h3 className="text-xl font-semibold mb-2">{show.show}</h3>
				<p className="text-lg mb-2">{show.time}</p>
				<p className="text-sm mb-4">{show.presenters}</p>
				<button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center">
					<svg
						className="w-5 h-5 mr-2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 3v18l14-9L5 3z"
						/>
					</svg>
					<span>Play</span>
				</button>
			</div>
		</div>
	);
};

export default CurrentShow;
