import React from 'react';

const BlogPost = ({ selectedPost }) => {
    if (!selectedPost) {
        return (
            <div className="p-8 text-center text-gray-500">
                Select a blog post to view full content.
            </div>
        );
    }

    const { image, time, category, title, description, author, readMoreLink } = selectedPost;

    return (
        <div className="p-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Blog Post Image */}
                <img className="w-full h-64 object-cover mb-6" src={image} alt={title} />

                {/* Blog Post Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>

                {/* Blog Post Meta (time and category) */}
                <div className="text-gray-500 text-sm mb-4">
                    <span>{time}</span> | <span>{category}</span>
                </div>

                {/* Blog Post Description */}
                <p className="text-gray-600 mb-6">
                    {description.length > 1100 ? `${description.substring(0, 1100)}...` : description}
                </p>

                {/* Blog Post Author */}
                <p className="text-gray-800 mb-6"><em>By</em> {author}</p>

                {/* Read More Link */}
                {readMoreLink ? (
                    <a
                        href={readMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-spanishOrange hover:text-earthYellow transition-colors duration-300"
                    >
                        Read the full post
                    </a>
                ) : (
                    <p className="text-gray-600">No external reference available. Read the full description above.</p>
                )}
            </div>
        </div>
    );
};

export default BlogPost;
