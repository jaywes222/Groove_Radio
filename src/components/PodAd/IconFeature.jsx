import React from 'react'

const IconFeature = ({ icon, title, description }) => (
    <div className="flex items-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">{icon}</div>
        <div className="ml-4">
            <p className="text-lg font-medium text-gray-900">{title}</p>
            <p className="text-base text-gray-500">{description}</p>
        </div>
    </div>
);

export default IconFeature
