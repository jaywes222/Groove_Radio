import React, { useState } from "react";

const ProfilePage = () => {
    const [profileData, setProfileData] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
        bio: "Music lover. Radio enthusiast. Playlist curator.",
        profilePicture: "https://via.placeholder.com/150",
        playlists: [
            { id: 1, name: "Chill Vibes", thumbnail: "https://via.placeholder.com/100" },
            { id: 2, name: "Workout Hits", thumbnail: "https://via.placeholder.com/100" },
            { id: 3, name: "Throwback Classics", thumbnail: "https://via.placeholder.com/100" },
        ],
        listeningHistory: [
            { id: 1, song: "Blinding Lights", artist: "The Weeknd", date: "Sep 20, 2024" },
            { id: 2, song: "Save Your Tears", artist: "The Weeknd", date: "Sep 19, 2024" },
        ],
        likes: [
            { id: 1, song: "Levitating", artist: "Dua Lipa" },
            { id: 2, song: "Montero", artist: "Lil Nas X" },
        ],
        songRequestCount: 2,
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(profileData);

    const handleEditToggle = () => {
        if (isEditing) {
            setProfileData(editedData);
        }
        setIsEditing(!isEditing);
    };

    const handleProfilePictureReset = () => {
        setProfileData({
            ...profileData,
            profilePicture: "https://via.placeholder.com/150",
        });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center mt-16">
            {/* Profile Header */}
            <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mb-8">
                <div className="flex items-center space-x-4">
                    <img
                        src={profileData.profilePicture}
                        alt="Profile"
                        className="rounded-full w-24 h-24 object-cover border-4 border-gray-700"
                    />
                    <div>
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedData.name}
                                onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                                className="bg-gray-700 text-3xl font-semibold rounded-md p-2"
                            />
                        ) : (
                            <h2 className="text-3xl font-semibold">{profileData.name}</h2>
                        )}
                        {isEditing ? (
                            <textarea
                                value={editedData.bio}
                                onChange={(e) => setEditedData({ ...editedData, bio: e.target.value })}
                                className="bg-gray-700 mt-2 p-2 rounded-md"
                            />
                        ) : (
                            <p className="text-gray-400 mt-2">{profileData.bio}</p>
                        )}
                        <button
                            onClick={handleProfilePictureReset}
                            className="text-tigerEye mt-2 hover:underline"
                        >
                            Reset Profile Picture
                        </button>
                    </div>
                </div>
                <button
                    onClick={handleEditToggle}
                    className="bg-spanishOrange px-4 py-2 rounded-md text-white hover:bg-white hover:text-spanishOrange border-2 border-spanishOrange"
                >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                </button>
            </div>

            {/* Playlists Section */}
            <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Favorite Playlists</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {profileData.playlists.map((playlist) => (
                        <div
                            key={playlist.id}
                            className="bg-gray-700 p-4 rounded-md shadow-md hover:bg-gray-600 transition"
                        >
                            <img
                                src={playlist.thumbnail}
                                alt={playlist.name}
                                className="w-full h-32 object-cover rounded-md mb-2"
                            />
                            <p className="text-center text-lg font-medium text-tigerEye">{playlist.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Liked Songs Section */}
            <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Liked Songs</h3>
                <ul className="space-y-3">
                    {profileData.likes.map((like) => (
                        <li
                            key={like.id}
                            className="bg-gray-700 p-4 rounded-md shadow-md hover:bg-gray-600 transition"
                        >
                            <p className="text-lg font-medium">
                                <span className="text-tigerEye">{like.song}</span> by {like.artist}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Song Requests Section */}
            <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Song Request Count</h3>
                <p className="text-gray-400">You have requested {profileData.songRequestCount} songs during this live show.</p>
            </div>

            {/* Orders Button */}
            <div className="max-w-4xl w-full mb-8">
                <a href="/myorders" className="bg-tigerEye w-full py-3 text-center rounded-md text-white block hover:bg-white hover:text-tigerEye border-2 border-tigerEye">
                    View Orders
                </a>
            </div>

            {/* Log Out Button */}
            <div className="max-w-4xl w-full">
                <button className="bg-red-600 w-full py-3 text-center rounded-md text-white hover:bg-red-700">
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
