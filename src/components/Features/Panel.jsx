import React from 'react';

const Panel = ({ image, altText, title, content }) => (
	<div className="flex flex-col py-5 md:flex-row md:space-x-7">
		{/* Panel Image */}
		<div className="flex justify-center md:w-1/2">
			<img
				src={image}
				alt={altText}
				className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full relative z-10"
			/>
		</div>
		{/* Panel Content */}
		<div className="flex flex-col space-y-8 md:w-1/2">
			<h3 className="mt-8 text-2xl font-semibold text-center md:mt-0 md:text-left md:text-3xl">
				{title}
			</h3>
			<p className="max-w-md mx-auto text-center text-battleshipGray md:mx-0 md:text-left">
				{content}
			</p>
			<div className="mx-auto md:mx-0">
				<a
					href="#"
					className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-earthYellow hover:bg-white hover:text-earthYellow hover:border-earthYellow"
				>
					More Info
				</a>
			</div>
		</div>
	</div>
);

export default Panel;
