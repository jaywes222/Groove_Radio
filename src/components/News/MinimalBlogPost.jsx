import React from 'react';

const MinimalBlogPost = ({ post, onClick }) => {
    return (
        <div
            className="cursor-pointer bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-all duration-300"
            onClick={() => onClick(post)}
            style={{ position: 'relative', width: '100%', paddingTop: '75%' }} // 4:3 aspect ratio (height is 75% of width)
        >
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={post.image}
                alt={post.title}
                style={{ borderRadius: '8px' }} 
            />
            <div className="absolute bottom-0 left-0 w-full p-2 bg-white bg-opacity-80">
                <h3 className="text-sm font-semibold text-gray-800">{post.title}</h3>
            </div>
        </div>
    );
};

export default MinimalBlogPost;
