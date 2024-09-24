import React, { useState } from "react";

const RequestSongPage = () => {
  const [songRequest, setSongRequest] = useState({
    title: "",
    artist: "",
    message: "",
  });

  const [requestQueue] = useState([
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", timestamp: "10:30 AM" },
    { id: 2, title: "Save Your Tears", artist: "The Weeknd", timestamp: "10:40 AM" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Song Requested:", songRequest);
    setSongRequest({ title: "", artist: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center justify-center mt-16">
      {/* Live Show Information */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-2">Live Show: Morning Grooves</h2>
        <p>Presenter: DJ Mike | 8:00 AM - 12:00 PM</p>
        <button className="bg-spanishOrange text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-white hover:text-spanishOrange border-2 border-spanishOrange sm:w-auto">
          Listen Live
        </button>
      </div>

      {/* Request Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Request a Song</h3>
        <div className="mb-4">
          <label className="block text-gray-400 mb-1">Song Title</label>
          <input
            type="text"
            value={songRequest.title}
            onChange={(e) => setSongRequest({ ...songRequest, title: e.target.value })}
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-spanishOrange"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-1">Artist Name</label>
          <input
            type="text"
            value={songRequest.artist}
            onChange={(e) => setSongRequest({ ...songRequest, artist: e.target.value })}
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-spanishOrange"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-1">Message (optional)</label>
          <textarea
            value={songRequest.message}
            onChange={(e) => setSongRequest({ ...songRequest, message: e.target.value })}
            className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-spanishOrange"
          />
        </div>
        <button className="w-full bg-tigerEye hover:bg-spanishOrange text-white py-3 px-4 rounded-lg font-semibold transition">
          Submit Request
        </button>
      </form>

      {/* Song Request Queue */}
      <div className="w-full max-w-3xl mt-8">
        <h3 className="text-xl font-semibold mb-4">Request Queue</h3>
        <ul className="space-y-4">
          {requestQueue.map((request) => (
            <li key={request.id} className="bg-gray-800 p-4 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">{request.title}</p>
                <p className="text-gray-400">{request.artist}</p>
              </div>
              <p className="text-gray-500 text-sm">{request.timestamp}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RequestSongPage;
