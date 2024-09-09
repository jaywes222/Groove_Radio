import React, { useState } from 'react';
import BlogPost from './BlogPost';
import MinimalBlogPost from './MinimalBlogPost';

const BlogGrid = ({ blogPosts }) => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    // Calculate the index range for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto py-12 flex flex-col lg:flex-row gap-8">
            {/* Thumbnail Grid and Pagination Controls */}
            <div className="flex-1 lg:pr-4 bg-gradient-to-r from-[#A19A91] via-[#FABC6B] to-[#E66F00] rounded-lg p-6 shadow-md">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                    {currentPosts.map((post, index) => (
                        <MinimalBlogPost key={index} post={post} onClick={setSelectedPost} />
                    ))}
                </div>
                {/* Pagination Controls */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`mx-2 px-4 py-2 bg-gray-200 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={indexOfLastPost >= blogPosts.length}
                        className={`mx-2 px-4 py-2 bg-gray-200 rounded ${indexOfLastPost >= blogPosts.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block lg:w-px bg-gray-300"></div>

            {/* Full Content Display */}
            <div className="flex-1 lg:flex lg:pl-4">
                {selectedPost ? <BlogPost selectedPost={selectedPost} /> : <div>Select a post to view the content</div>}
            </div>
        </div>
    );
};

export default BlogGrid;
