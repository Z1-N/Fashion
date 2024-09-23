import React from 'react';

// Define the types for ProductCard props
type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string; // Product image
};

const ProductCard: React.FC<ProductCardProps> = ({ title, price, rating, category, thumbnail }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{category}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xl font-bold text-green-600">${price}</span>
        <span className="text-yellow-500 text-sm">⭐ {rating}</span>
      </div>
    </div>
  );
};

export default ProductCard;
