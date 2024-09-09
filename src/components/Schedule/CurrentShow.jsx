import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const CurrentShow = ({ show, recommendations }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

	const streamUrl = 'https://stream.zeno.fm/xhykh0okx2ltv';

	const onPlayPause = () => {
		if (!isPlaying) {
			audioRef.current.play();
			setIsPlaying(true);
		} else {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	};

	return (
		<div
			className="relative bg-cover bg-center rounded-lg shadow-lg p-6 text-white mb-8"
		>

			<div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
			<div className="relative z-10 flex flex-col items-center justify-center h-full">
				{/* Show Details */}
				<h3 className="text-2xl font-semibold mb-2 animate-bounce">
					{show.show}
				</h3>
				<p className="text-lg mb-2">{show.time}</p>
				<p className="text-sm mb-4">
					{Array.isArray(show.presenters)
						? show.presenters.map((presenter, index) => (
							<a
								key={index}
								href={`/presenter/${presenter.toLowerCase()}`}
								className="hover:underline"
							>
								{presenter}
								{index < show.presenters.length - 1 ? ', ' : ''}
							</a>
						))
						: show.presenters}
				</p>
				{/* Play/Pause Button */}
				<button
					onClick={onPlayPause}
					className="px-6 py-3 bg-tigerEye text-white rounded-full hover:bg-white hover:text-tigerEye flex items-center transform hover:scale-105 transition-transform duration-200"
				>
					{isPlaying ? (
						<>
							<FaPause className="w-5 h-5 mr-2" />
							<span>Pause</span>
						</>
					) : (
						<>
							<FaPlay className="w-5 h-5 mr-2" />
							<span>Play</span>
						</>
					)}
				</button>
				<audio ref={audioRef} src={streamUrl} />
			</div>

			{/* Recommendations */}
			<div className="relative z-10 mt-8">
				<h4 className="text-xl font-semibold mb-4">You Might Also Like:</h4>
				<ul className="grid grid-cols-2 gap-4">
					{/* {recommendations.map((rec, index) => (
						<li
							key={index}
							className="bg-white bg-opacity-20 p-3 rounded-lg flex items-center space-x-3 hover:bg-opacity-30 transition-colors duration-200"
						>
							<img
								src={rec.image}
								alt={rec.title}
								className="w-12 h-12 rounded-lg object-cover"
							/>
							<div>
								<p className="text-sm font-medium">{rec.title}</p>
								<p className="text-xs text-gray-300">{rec.artist}</p>
							</div>
						</li>
					))} */}
				</ul>
			</div>
		</div>
	);
};

export default CurrentShow;
