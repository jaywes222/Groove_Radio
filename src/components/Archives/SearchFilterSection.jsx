import React, { useState } from 'react';

const SearchFilterSection = () => {
    const [search, setSearch] = useState('');
    const [date, setDate] = useState('');
    const [presenter, setPresenter] = useState('');

    return (
        <div className="search-filter mb-8">
            <input
                type="text"
                placeholder="Search Shows/Podcasts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 border rounded w-full mb-4"
            />
            <div className="flex gap-4 mb-4">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Filter by presenter..."
                    value={presenter}
                    onChange={(e) => setPresenter(e.target.value)}
                    className="p-2 border rounded"
                />
            </div>
        </div>
    );
};

export default SearchFilterSection;
