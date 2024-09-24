import React from 'react';

const PlaylistCard = ({ playlist, onClick }) => {
    return (
        <div
            className="flex-shrink-0 w-72 sm:w-56 bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => onClick(playlist.id)}
        >
            <img src={playlist.image} alt={playlist.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h2 className="text-2xl font-bold mb-2">{playlist.name}</h2>
            <p className="mb-4">{playlist.description}</p>
            <button className="bg-spanishOrange hover:bg-white hover:text-spanishOrange border-2 border-spanishOrange px-4 py-2 rounded-full w-full">Play</button>
        </div>
    );
};

export default PlaylistCard;