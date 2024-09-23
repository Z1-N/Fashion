import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

// Define the type structure for the products coming from the API
type Product = {
  id: number;
  title: string;    // Corresponds to `name`
  price: number;
  rating: number;
  category: string;
  thumbnail: string; // Image from the API
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // List of relevant categories for women's clothes and accessories
  const womenCategories = [
    'womens-dresses',
    'womens-shoes',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
  ];

  // Fetch products from Dummy JSON API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();

        // Filter products to include only women-related categories
        const filteredProducts = data.products.filter((product: Product) =>
          womenCategories.includes(product.category)
        );

        setProducts(filteredProducts);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-xl">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="font-elephant text-3xl sm:text-4xl text-center text-green-900 mb-12">Shop Women's Clothing & Accessories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
