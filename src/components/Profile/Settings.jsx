import React, { useState } from "react";

const SettingsPage = () => {
    const [userName, setUserName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [notifications, setNotifications] = useState(true);
    const [autoPlay, setAutoPlay] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [streamingQuality, setStreamingQuality] = useState("High");
    const [appLanguage, setAppLanguage] = useState("English");
    const [dataSaver, setDataSaver] = useState(false);

    const handleSave = () => {
        // Logic to save user settings
        alert("Settings saved!");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-12 mt-14">
            <h2 className="text-4xl font-semibold mb-10 text-center">Settings</h2>

            {/* Profile Settings */}
            <div className="mb-8 p-6 bg-gray-800 shadow rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Profile Settings</h3>
                <div className="flex items-center space-x-4">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <button className="px-4 py-2 bg-spanishOrange text-white rounded-md hover:bg-white hover:text-spanishOrange border-2 border-spanishOrange">
                        Change Picture
                    </button>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-300 mb-2">Username</label>
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-spanishOrange"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-spanishOrange"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            {/* Privacy & Security */}
            <div className="mb-8 p-6 bg-gray-800 shadow rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Privacy & Security</h3>
                <div className="mt-4">
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                        Change Password
                    </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <label className="block text-gray-300">Two-Factor Authentication</label>
                    <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={notifications}
                        onChange={() => setNotifications(!notifications)}
                    />
                </div>
            </div>

            {/* Notifications */}
            <div className="mb-8 p-6 bg-gray-800 shadow rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Notifications</h3>
                <div className="flex items-center justify-between">
                    <label className="block text-gray-300">Show Updates</label>
                    <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={notifications}
                        onChange={() => setNotifications(!notifications)}
                    />
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <label className="block text-gray-300">Email Updates</label>
                    <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={notifications}
                        onChange={() => setNotifications(!notifications)}
                    />
                </div>
            </div>

            {/* Playback Settings */}
            <div className="mb-8 p-6 bg-gray-800 shadow rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Playback Settings</h3>
                <div className="flex items-center justify-between">
                    <label className="block text-gray-300">Auto Play</label>
                    <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={autoPlay}
                        onChange={() => setAutoPlay(!autoPlay)}
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-300 mb-2">Streaming Quality</label>
                    <select
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white"
                        value={streamingQuality}
                        onChange={(e) => setStreamingQuality(e.target.value)}
                    >
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>
            </div>

            {/* Theme Settings */}
            <div className="mb-8 p-6 bg-gray-800 shadow rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Appearance</h3>
                <div className="flex items-center justify-between">
                    <label className="block text-gray-300">Dark Mode</label>
                    <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={theme === "dark"}
                        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                    />
                </div>
            </div>

            {/* About Section */}
            <div className="mb-8 p-6 bg-gray-800 shadow rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">About</h3>
                <div className="mt-4">
                    <p className="text-gray-300">Version: 1.0.0</p>
                </div>
                <div className="mt-4">
                    <button className="text-spanishOrange hover:underline">Privacy Policy</button>
                    <button className="text-spanishOrange hover:underline ml-4">Terms of Use</button>
                    <button className="text-spanishOrange hover:underline ml-4">Third-Party Licenses</button>
                    <button className="text-spanishOrange hover:underline ml-4">Platform Rules</button>
                    <button className="text-spanishOrange hover:underline ml-4">Support</button>
                </div>
            </div>

            {/* Audio Quality Section */}
            <div className="mb-8 p-6 bg-gray-800 shadow rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Audio Quality</h3>
                <div className="flex items-center justify-between">
                    <label className="block text-gray-300">Streaming over WiFi</label>
                    <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={dataSaver}
                        onChange={() => setDataSaver(!dataSaver)}
                    />
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <label className="block text-gray-300">Streaming over Mobile</label>
                    <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={dataSaver}
                        onChange={() => setDataSaver(!dataSaver)}
                    />
                </div>
            </div>

            {/* Languages Section */}
            <div className="mb-8 p-6 bg-gray-800 shadow rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Languages</h3>
                <div className="mt-4">
                    <label className="block text-gray-300 mb-2">App Language</label>
                    <select
                        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white"
                        value={appLanguage}
                        onChange={(e) => setAppLanguage(e.target.value)}
                    >
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                    </select>
                </div>
            </div>

            {/* Account Management */}
            <div className="mb-8 p-6 bg-gray-800 shadow rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Account Management</h3>
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                        Log Out
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                        Delete Account
                    </button>
                </div>
            </div>

            {/* Save Settings Button */}
            <div className="flex justify-center mb-8">
                <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-spanishOrange text-white rounded-md hover:bg-orange-600"
                >
                    Save Settings
                </button>
            </div>
        </div>
    );
};

export default SettingsPage;
