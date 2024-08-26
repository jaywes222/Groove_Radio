import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, subtitle, link, image, altText }) => {
	return (
		<section className="grid md:grid-cols-2 grid-cols-1 min-h-screen lg:min-h-[480px] bg-black text-white px-6 md:px-16 py-12 md:py-24">
			<div className="flex flex-col justify-center md:items-start items-center text-center md:text-left">
				<h2 className="text-4xl font-bold lg:text-6xl text-white mb-4">
					{title}
				</h2>
				<p className="text-lg md:text-2xl mb-8 w-full md:w-3/4">
					{subtitle}
				</p>
				{/* Button Container */}
				<div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
					<Link
						to={link}
						className="p-4 text-sm font-semibold text-white bg-tigerEye rounded shadow-md 
                            border-2 border-tigerEye md:text-base hover:bg-white hover:text-tigerEye"
					>
						Live Stream
					</Link>
					<Link
						to={link}
						className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md 
                            border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
					>
						Download Our Music Player
					</Link>
				</div>
			</div>

			<div className="flex justify-center items-center">
				<img
					src={image}
					alt={altText}
					className="w-full max-w-sm md:max-w-md lg:max-w-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
