import React from 'react';
import Table from './../Common/Table';
import Loader from '../Common/Loader';

const dummyOrders = [
    {
        _id: '1',
        products: [
            { product: { title: 'Groove Radio T-shirt' }, quantity: 2 },
            { product: { title: 'Limited Edition Vinyl' }, quantity: 1 }
        ],
        total: 4999,
        status: 'Shipped'
    },
    {
        _id: '2',
        products: [
            { product: { title: 'Groove Radio Hoodie' }, quantity: 1 }
        ],
        total: 3999,
        status: 'Processing'
    },
    {
        _id: '3',
        products: [
            { product: { title: 'Groove Radio Cap' }, quantity: 3 }
        ],
        total: 2999,
        status: 'Delayed'
    }
];

const MyOrderPage = () => {
    const isLoading = false; // Simulating a loading state
    const error = null; // Simulating no errors
    const orders = dummyOrders; // Using dummy orders

    const getProductString = order => {
        const productStringArr = order.products.map(p => `${p.product.title}(${p.quantity})`);
        return productStringArr.join(', ');
    };

    const getStatusClass = status => {
        switch (status) {
            case 'Shipped':
                return 'bg-screaminGreen text-green-800';
            case 'Processing':
                return 'bg-spanishOrange text-orange-800';
            case 'Delayed':
                return 'bg-red-200 text-red-800';
            default:
                return '';
        }
    };

    return (
        <section className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-8 px-6">
            <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
            {isLoading && <Loader />}
            {error && <em className="form_error text-xt text-red-500">{error}</em>}
            {orders && (
                <Table headings={['Order', 'Products', 'Total', 'Status']}>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr
                                key={order._id}
                                className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-amber-100' : 'bg-white'
                                    }`}
                            >
                                <td className="py-3 px-4 text-center">{index + 1}</td>
                                <td className="py-3 px-4 text-center">
                                    {getProductString(order)}
                                </td>
                                <td className="py-3 px-4 text-center">KES{order.total.toFixed(2)}</td>
                                <td className={`py-3 px-4 text-center ${getStatusClass(order.status)}`}>
                                    {order.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </section>
    );
};

export default MyOrderPage;
