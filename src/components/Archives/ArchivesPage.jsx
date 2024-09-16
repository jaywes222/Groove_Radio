import React, { useState, useEffect } from 'react';
import SearchFilterSection from './SearchFilterSection';
import ArchivesTable from './ArchivesTable';


const ArchivesPage = () => {
    const [archives, setArchives] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const getArchives = async () => {
    //         try {
    //             const data = await fetchArchives();
    //             setArchives(data);
    //         } catch (error) {
    //             console.error("Error fetching archives:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     getArchives();
    // }, []);

    // Simulate loading and fetching data
    useEffect(() => {
        setTimeout(() => {
            setArchives([
                {
                    id: 1,
                    date: '2024-09-10',
                    time: '10:00 AM',
                    presenter: 'John Doe',
                    show: 'Morning Vibes',
                    description: 'A chill morning show to start your day.',
                    listenLink: '#',
                },
                {
                    id: 2,
                    date: '2024-09-11',
                    time: '02:00 PM',
                    presenter: 'Jane Smith',
                    show: 'Afternoon Beats',
                    description: 'The best beats to keep you going through the afternoon.',
                    listenLink: '#',
                },
                {
                    id: 3,
                    date: '2024-09-12',
                    time: '08:00 PM',
                    presenter: 'Mike Johnson',
                    show: 'Night Grooves',
                    description: 'Wind down with some smooth jazz and R&B tunes.',
                    listenLink: '#',
                },
                {
                    id: 3,
                    date: '2024-09-12',
                    time: '08:00 PM',
                    presenter: 'Mike Johnson',
                    show: 'Night Grooves',
                    description: 'Wind down with some smooth jazz and R&B tunes.',
                    listenLink: '#',
                },
                {
                    id: 3,
                    date: '2024-09-12',
                    time: '08:00 PM',
                    presenter: 'Mike Johnson',
                    show: 'Night Grooves',
                    description: 'Wind down with some smooth jazz and R&B tunes.',
                    listenLink: '#',
                },
            ]);
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div className="archives container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">Archives</h1>
            <SearchFilterSection />
            <ArchivesTable archives={archives} loading={loading} />
        </div>
    );
};

export default ArchivesPage;
