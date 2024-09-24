import React from "react";

const ListeningHistoryPage = () => {
    // Sample data for listening history
    const listeningHistory = [
        { id: 1, title: "Blinding Lights", artist: "The Weeknd", date: "2024-09-24" }, // Today
        { id: 2, title: "Save Your Tears", artist: "The Weeknd", date: "2024-09-23" }, // Yesterday
        { id: 3, title: "Levitating", artist: "Dua Lipa", date: "2024-09-18" },
        { id: 4, title: "Peaches", artist: "Justin Bieber", date: "2024-09-17" },
        { id: 5, title: "Kiss Me More", artist: "Doja Cat", date: "2024-09-16" },
    ];

    // Function to categorize songs by date
    const categorizeHistory = (history) => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const categorized = {
            today: [],
            yesterday: [],
            earlier: [],
        };

        history.forEach((song) => {
            const songDate = new Date(song.date);
            if (songDate.toDateString() === today.toDateString()) {
                categorized.today.push(song);
            } else if (songDate.toDateString() === yesterday.toDateString()) {
                categorized.yesterday.push(song);
            } else {
                categorized.earlier.push(song);
            }
        });

        return categorized;
    };

    const categorizedHistory = categorizeHistory(listeningHistory);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Listening History</h2>

                {/* Today Section */}
                {categorizedHistory.today.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Today</h3>
                        <ul className="space-y-4">
                            {categorizedHistory.today.map((song) => (
                                <li key={song.id} className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold text-lg">{song.title}</p>
                                        <p className="text-gray-400">{song.artist}</p>
                                    </div>
                                    <p className="text-gray-500 text-sm">{new Date(song.date).toLocaleDateString()}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Yesterday Section */}
                {categorizedHistory.yesterday.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Yesterday</h3>
                        <ul className="space-y-4">
                            {categorizedHistory.yesterday.map((song) => (
                                <li key={song.id} className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold text-lg">{song.title}</p>
                                        <p className="text-gray-400">{song.artist}</p>
                                    </div>
                                    <p className="text-gray-500 text-sm">{new Date(song.date).toLocaleDateString()}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Earlier Section */}
                {categorizedHistory.earlier.length > 0 && (
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Earlier</h3>
                        <ul className="space-y-4">
                            {categorizedHistory.earlier.map((song) => (
                                <li key={song.id} className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold text-lg">{song.title}</p>
                                        <p className="text-gray-400">{song.artist}</p>
                                    </div>
                                    <p className="text-gray-500 text-sm">{new Date(song.date).toLocaleDateString()}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListeningHistoryPage;
