import React from 'react';

const Table = ({ headings, children }) => {
    return (
        <table className="common_table w-full mb-4 border-collapse bg-white shadow-md shadow-black">
            <thead>
                <tr className="h-[50px] bg-earthYellow text-white uppercase">
                    {headings.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))}
                </tr>
            </thead>
            {children}
        </table>
    );
}

export default Table;
