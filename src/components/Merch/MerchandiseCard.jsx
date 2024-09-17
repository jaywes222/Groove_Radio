import React from 'react';

const MerchandiseCard = ({ image, title, description, price }) => {
  const handleClick = () => {
    const message = `Hello, I’m interested in buying the ${title} which costs ${price}.`;

    // URL-encode the message
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp Click-to-Chat link
    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;

    // Open WhatsApp in a new tab or window
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="merch-item bg-white rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-64 object-cover object-center" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-800 font-bold">{price}</p>
          <button
            className="mt-4 bg-earthYellow hover:bg-tigerEye text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
