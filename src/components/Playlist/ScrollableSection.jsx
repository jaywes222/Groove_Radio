import React, { useRef, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';
import ScrollButton from './ScrollButton';

const ScrollableSection = ({ title, playlists, onPlaylistClick }) => {
    const scrollContainerRef = useRef(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            if (scrollWidth - scrollLeft <= clientWidth + 50) {
                // Trigger load more functionality if required
            }
        }
    };

    const scrollLeft = () => {
        scrollContainerRef.current?.scrollBy({ left: -800, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current?.scrollBy({ left: 800, behavior: 'smooth' });
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);
        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <div className="flex justify-between items-center mb-4">
                <ScrollButton direction="left" onClick={scrollLeft} />
                <ScrollButton direction="right" onClick={scrollRight} />
            </div>
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto space-x-6 scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
            >
                {playlists.map((playlist) => (
                    <PlaylistCard key={playlist.id} playlist={playlist} onClick={onPlaylistClick} />
                ))}
            </div>
        </div>
    );
};

export default ScrollableSection;