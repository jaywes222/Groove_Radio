import React, { useState, useEffect } from 'react';
import MerchandiseCardSkeleton from './MerchandiseCardSkeleton';
import MerchandiseCard from './MerchandiseCard';

const categories = [
    'All',
    'Hoodies',
    'Tees',
    'Accessories'
];

const productsData = [
    { image: 'src/assets/orange_hoodie.jpg', title: 'Nafsi Orange Hoodie', description: 'High-quality hoodie featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Hoodies' },
    { image: 'src/assets/white_hoodie.jpg', title: 'Nafsi White Hoodie', description: 'High-quality hoodie featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Hoodies' },
    { image: 'src/assets/white_tee.jpg', title: 'Nafsi Tee', description: 'High-quality graphic-tee featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Tees' },
    { image: 'src/assets/orange_hoodie.jpg', title: 'Nafsi Orange Hoodie', description: 'High-quality hoodie featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Hoodies' },
    { image: 'src/assets/white_hoodie.jpg', title: 'Nafsi White Hoodie', description: 'High-quality hoodie featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Hoodies' },
    { image: 'src/assets/white_tee.jpg', title: 'Nafsi Tee', description: 'High-quality graphic-tee featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Tees' },
    { image: 'src/assets/white_tee.jpg', title: 'Nafsi Tee', description: 'High-quality graphic-tee featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Tees' },
    { image: 'src/assets/white_tee.jpg', title: 'Nafsi Tee', description: 'High-quality graphic-tee featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Accessories' },
    { image: 'src/assets/white_tee.jpg', title: 'Nafsi Tee', description: 'High-quality graphic-tee featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Tees' },
    { image: 'src/assets/white_tee.jpg', title: 'Nafsi Tee', description: 'High-quality graphic-tee featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Accessories' },
    { image: 'src/assets/white_tee.jpg', title: 'Nafsi Tee', description: 'High-quality graphic-tee featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Tees' },
    { image: 'src/assets/white_tee.jpg', title: 'Nafsi Tee', description: 'High-quality graphic-tee featuring our signature logo. Perfect for any season.', price: 'KES 2500', category: 'Accessories' },
];

const Merchandise = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

    // Simulate loading data
    useEffect(() => {
        setTimeout(() => {
            setProducts(productsData);
            setLoading(false);
        }, 2000); // Simulate a 2-second load time
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    // Pagination of products based on itemsPerPage
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <section id="merchandise">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">Merchandise</h2>
                <p className="text-center text-battleshipGray mb-6">Groove With Us Anywhere You Go</p>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <aside className="mb-6 md:mb-0 md:w-1/4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Categories</h3>
                            <ul>
                                {categories.map(category => (
                                    <li key={category} className="mb-2">
                                        <button
                                            onClick={() => handleCategoryClick(category)}
                                            className={`text-spanishOrange ${selectedCategory === category ? 'font-bold' : ''}`}
                                        >
                                            {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Merchandise Grid */}
                    <div className="md:w-3/4">
                        {/* Items per Page Dropdown */}
                        <div className="mb-4 flex justify-between items-center flex-col md:flex-row">
                            <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                            <select
                                id="itemsPerPage"
                                value={itemsPerPage}
                                onChange={handleItemsPerPageChange}
                                className="border-gray-300 rounded-md"
                            >
                                <option value={3}>3</option>
                                <option value={6}>6</option>
                                <option value={9}>9</option>
                                <option value={12}>12</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {loading ? (
                                Array.from({ length: itemsPerPage }).map((_, index) => <MerchandiseCardSkeleton key={index} />)
                            ) : (
                                paginatedProducts.map((product, index) => (
                                    <MerchandiseCard
                                        key={index}
                                        image={product.image}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                    />
                                ))
                            )}
                        </div>

                        {/* Pagination Controls */}
                        <div className="mt-6 flex justify-between items-center">
                            <button
                                onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span>Page {currentPage}</span>
                            <button
                                onClick={() => setCurrentPage(page => (page * itemsPerPage < filteredProducts.length ? page + 1 : page))}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
                                disabled={currentPage * itemsPerPage >= filteredProducts.length}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Merchandise;
