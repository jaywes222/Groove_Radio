import React from 'react';
import { useNavigate } from 'react-router-dom';
import { playlists } from './playlists';
import ScrollableSection from './ScrollableSection';

const PlaylistPage = () => {
    const navigate = useNavigate();

    const handlePlaylistClick = (id) => {
        navigate(`/playlist/${id}`);
    };

    // Sections
    const recentlyPlayed = playlists.slice(0, 4);
    const mostPlayed = playlists.slice(4, 8);
    const newRecommendations = playlists.slice(8, 12);

    return (
        <div className="w-full p-6 bg-black text-white mt-16">
            <h1 className="text-4xl font-bold mb-6 text-center">Groover Playlists</h1>

            {/* Scrollable Sections */}
            <ScrollableSection title="Recently Played" playlists={recentlyPlayed} onPlaylistClick={handlePlaylistClick} />
            <ScrollableSection title="Most Played" playlists={mostPlayed} onPlaylistClick={handlePlaylistClick} />
            <ScrollableSection title="New Recommendations" playlists={newRecommendations} onPlaylistClick={handlePlaylistClick} />
        </div>
    );
};

export default PlaylistPage;
