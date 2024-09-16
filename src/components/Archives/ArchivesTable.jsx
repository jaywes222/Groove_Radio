import React from 'react';

const ArchivesTable = ({ archives, loading }) => {
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <table className="w-full bg-white border-collapse border-gray-200 rounded-lg shadow-md shadow-black table-auto">
            <thead>
                <tr className="h-16 bg-spanishOrange text-white uppercase border-b">
                    <th className="p-4 min-w-[100px]">Date</th>
                    <th className="p-4 min-w-[80px]">Time</th>
                    <th className="p-4 min-w-[150px]">Presenter</th>
                    <th className="p-4 min-w-[180px]">Show/Podcast</th>
                    <th className="p-4 min-w-[250px]">Description</th>
                    <th className="p-4 min-w-[100px]">Listen</th>
                </tr>
            </thead>
            <tbody>
                {archives.map((archive, index) => (
                    <tr key={archive.id} className={`${index % 2 === 0 ? 'bg-earthYellow' : 'bg-white'}`}>
                        <td className="p-4">{archive.date}</td>
                        <td className="p-4">{archive.time}</td>
                        <td className="p-4 truncate">{archive.presenter}</td>
                        <td className="p-4 truncate">{archive.show}</td>
                        <td className="p-4 truncate">{archive.description}</td>
                        <td className="p-4">
                            <a href={archive.listenLink} className="text-spashOrange hover:underline">Listen Now</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ArchivesTable;
