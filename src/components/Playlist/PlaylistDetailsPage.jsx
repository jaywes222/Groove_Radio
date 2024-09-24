import React, { useState, useEffect, useRef } from 'react';
import backgroundImage from '../../assets/music.jpg';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faHeart, faShare, faVolumeUp, faRedo, faRandom } from '@fortawesome/free-solid-svg-icons';

const songsData = {
    1: Array.from({ length: 100 }, (_, i) => ({ title: `Song ${i + 1}`, artist: `Artist ${String.fromCharCode(65 + (i % 26))}` })),
};

const sampleComments = [
    { id: 1, text: "Love this playlist!", user: "User1" },
    { id: 2, text: "Perfect for my workout!", user: "User2" },
];

const PlaylistDetailPage = () => {
    const { id } = useParams();
    const [songs, setSongs] = useState(songsData[id] || []);
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState(sampleComments);
    const [newComment, setNewComment] = useState('');
    const [currentTime, setCurrentTime] = useState(0);
    const containerRef = useRef(null);

    const playSong = (index) => {
        setCurrentSongIndex(index);
        setIsPlaying(true);
    };

    const pauseSong = () => {
        setIsPlaying(false);
    };

    const nextSong = () => {
        setCurrentSongIndex((prev) => (prev + 1) % songs.length);
        setCurrentTime(0);
    };

    const previousSong = () => {
        setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
        setCurrentTime(0);
    };


    const loadMoreSongs = () => {
        if (loading) return;

        setLoading(true);
        setTimeout(() => {
            const moreSongs = Array.from({ length: 20 }, (_, i) => ({
                title: `New Song ${i + songs.length + 1}`,
                artist: `Artist ${String.fromCharCode(65 + ((i + songs.length) % 26))}`
            }));
            setSongs((prev) => [...prev, ...moreSongs]);
            setLoading(false);
        }, 1000);
    };

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
            if (scrollHeight - scrollTop <= clientHeight + 20) {
                loadMoreSongs();
            }
        }
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment) {
            const newCommentData = { id: comments.length + 1, text: newComment, user: "CurrentUser" };
            setComments([...comments, newCommentData]);
            setNewComment('');
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                setCurrentTime((prev) => {
                    if (prev >= songs[currentSongIndex]?.duration) {
                        nextSong();
                        return 0;
                    }
                    return prev + 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isPlaying, currentSongIndex]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="flex h-screen bg-black text-white mt-16">
            <div className="flex-grow p-6 h-3/4">
                <h1 className="text-4xl font-bold mb-4">Playlist Details for Playlist {id}</h1>
                <div ref={containerRef} className="overflow-y-auto h-3/4">
                    <ul className="space-y-4">
                        {songs.map((song, index) => (
                            <li key={index} className={`flex justify-between items-center p-4 bg-gray-800 rounded-lg ${currentSongIndex === index ? 'border border-orange-500' : ''}`}>
                                <span onClick={() => playSong(index)} className="cursor-pointer">{song.title} - {song.artist}</span>
                                <div className="flex items-center">
                                    {currentSongIndex === index && isPlaying ? (
                                        <button onClick={pauseSong} className="bg-red-600 hover:bg-red-500 p-2 rounded-full">
                                            <FontAwesomeIcon icon={faPause} />
                                        </button>
                                    ) : (
                                        <button onClick={() => playSong(index)} className="bg-green-600 hover:bg-green-500 p-2 rounded-full">
                                            <FontAwesomeIcon icon={faPlay} />
                                        </button>
                                    )}
                                    <button className="text-red-500 ml-2"><FontAwesomeIcon icon={faHeart} /></button>
                                    <button className="text-blue-500 ml-2"><FontAwesomeIcon icon={faShare} /></button>
                                </div>
                            </li>
                        ))}
                        {loading && <p className="text-center">Loading more songs...</p>}
                    </ul>
                </div>

                <h2 className="text-xl font-bold mt-6">Comments</h2>
                <form onSubmit={handleCommentSubmit} className="mt-2">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="bg-gray-700 text-white px-2 py-1 rounded w-full mb-2"
                        placeholder="Add a comment..."
                    />
                    <button type="submit" className="bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-full">Submit</button>
                </form>
                <ul className="mt-4">
                    {comments.map((comment) => (
                        <li key={comment.id} className="border-b border-gray-600 mb-2">{comment.user}: {comment.text}</li>
                    ))}
                </ul>
            </div>

            <div className="p-4 bg-gray-800 w-1/4 flex flex-col">
                {currentSongIndex !== null && (
                    <>
                        <img src={backgroundImage} alt="Playing" className="h-48 object-cover mb-4" />
                        <h2 className="text-2xl mb-2">{songs[currentSongIndex].title} - {songs[currentSongIndex].artist}</h2>

                        <div className="flex justify-between mb-4">
                            <button onClick={previousSong} className="bg-orange-600 hover:bg-orange-500 p-2 rounded-full">
                                <FontAwesomeIcon icon={faStepBackward} />
                            </button>
                            {isPlaying ? (
                                <button onClick={pauseSong} className="bg-red-600 hover:bg-red-500 p-2 rounded-full">
                                    <FontAwesomeIcon icon={faPause} />
                                </button>
                            ) : (
                                <button onClick={() => playSong(currentSongIndex)} className="bg-green-600 hover:bg-green-500 p-2 rounded-full">
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                            )}
                            <button onClick={nextSong} className="bg-orange-600 hover:bg-orange-500 p-2 rounded-full">
                                <FontAwesomeIcon icon={faStepForward} />
                            </button>
                        </div>

                        <div className="mb-4">
                            <div className="relative h-2 bg-gray-700 rounded-full">
                                <div
                                    className="absolute h-full bg-orange-600 rounded-full"
                                    style={{ width: `${(currentTime / songs[currentSongIndex].duration) * 100}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-sm mt-1">
                                <span>{formatTime(currentTime)}</span>
                                <span>{formatTime(songs[currentSongIndex].duration - currentTime)}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <div className="flex space-x-4">
                                <button className="bg-orange-600 hover:bg-orange-500 p-2 rounded-full">
                                    <FontAwesomeIcon icon={faVolumeUp} />
                                </button>
                                <button className="bg-orange-600 hover:bg-orange-500 p-2 rounded-full">
                                    <FontAwesomeIcon icon={faRedo} />
                                </button>
                                <button className="bg-orange-600 hover:bg-orange-500 p-2 rounded-full">
                                    <FontAwesomeIcon icon={faRandom} />
                                </button>
                            </div>
                            <div className="flex space-x-2">
                                <button onClick={() => handleLikeSong(currentSongIndex)} className="bg-black text-red-500 rounded-full p-2">
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                                <button onClick={() => shareSong(songs[currentSongIndex])} className="bg-black text-blue-500 p-2">
                                    <FontAwesomeIcon icon={faShare} />
                                </button>
                            </div>
                        </div>

                        <hr className="my-4 border-gray-700" />
                    </>
                )}
                
                <h2 className="text-xl font-bold mb-4 sticky top-0 bg-gray-800">Other Songs</h2>
                <div className="overflow-y-auto h-auto">
                    <ul>
                        {songs.map((song, index) => (
                            <li key={index} className={`cursor-pointer mb-2 ${currentSongIndex === index ? 'font-bold' : ''}`}>
                                <span onClick={() => playSong(index)}>{song.title} - {song.artist}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PlaylistDetailPage;
