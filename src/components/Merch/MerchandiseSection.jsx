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
            <div className="container mx-auto px-6">
                <h2 className="mb-6 text-4xl font-semibold text-center">Merchandise</h2>
                <p className="max-w-md mx-auto text-center text-battleshipGray">Groove With Us Anywhere You Go</p>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Sidebar */}
                    <aside className="md:col-span-1">
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
                    <div className="md:col-span-3">
                        {/* Items per Page Dropdown */}
                        <div className="mb-4">
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

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Merchandise;
