import React from 'react'

const FeatureItem = ({ imageSrc, title, description }) => (
    <div className="flex items-center">
        <img className="h-12 w-12 rounded-full" src={imageSrc} alt={title} />
        <div className="ml-4">
            <p className="text-lg font-medium">{title}</p>
            <p className="text-base text-gray-200">{description}</p>
        </div>
    </div>
);

export default FeatureItem
