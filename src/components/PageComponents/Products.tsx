import  { useState } from 'react';

// Mock product data with 8 items in each category and SVG images as placeholders
const products = [
  {
    image: 'assets/pexels-dima-valkov-6402848 1.svg',
    title: 'Spread Collar Shirt',
    price: '$48.99',
    rating: '5.0',
    stars: './assets/fi-ss-star.svg',
    category: 'hot',
  },
  {
    image: 'assets/pexels-dima-valkov-6211601-1.svg',
    title: 'Tailored Jacket',
    price: '$46.00',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    category: 'hot',
  },
  {
    image: 'assets/Frame 4.svg',
    title: 'Shine On Me Blouse',
    price: '$40.00',
    rating: '4.8',
    stars: './assets/fi-ss-star.svg',
    category: 'hot',
  },
  {
    image: 'assets/pexels-monstera-6311613 (1) 1.svg',
    title: 'Gray Solid Padded Jacket',
    price: '$45.00',
    rating: '4.7',
    stars: './assets/fi-ss-star.svg',
    category: 'hot',
  },
  {
    image: 'assets/pexels-dima-valkov-6211614 1.svg',
    title: 'Printed Loose T-shirt',
    price: '$100.00',
    rating: '4.8',
    stars: './assets/fi-ss-star.svg',
    category: 'hot',
  },
  {
    image: 'assets/pexels-dima-valkov-6402846 1.svg',
    title: 'Summer Wind Crop Shirt',
    price: '$60.00',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    category: 'hot',
  },
  {
    image: 'assets/image.svg',
    title: 'White Solid Formal Shirt',
    price: '$70.00',
    rating: '5.0',
    stars: './assets/fi-ss-star.svg',
    category: 'hot',
  },
  {
    image: 'assets/pexels-monstera-6311612 3.svg',
    title: 'Solid Round Neck T-shirt',
    price: '$50.00',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    category: 'hot',
  },

  // New Arrivals
  {
    image: 'https://via.placeholder.com/150?text=Shirt+5',
    title: 'Summer Wind Crop Shirt',
    price: '$39.95',
    rating: '4.7',
    stars: './assets/fi-ss-star.svg',
    category: 'new-arrivals',
  },
  {
    image: 'https://via.placeholder.com/150?text=Blouse+3',
    title: 'Shine On Me Blouse',
    price: '$42.99',
    rating: '4.8',
    stars: './assets/fi-ss-star.svg',
    category: 'new-arrivals',
  },
  {
    image: 'https://via.placeholder.com/150?text=Shirt+6',
    title: 'Printed Loose T-shirt',
    price: '$39.99',
    rating: '5.0',
    stars: './assets/fi-ss-star.svg',
    category: 'new-arrivals',
  },
  {
    image: 'https://via.placeholder.com/150?text=Shirt+7',
    title: 'White Solid Formal Shirt',
    price: '$39.00',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    category: 'new-arrivals',
  },
  {
    image: 'https://via.placeholder.com/150?text=Shirt+8',
    title: 'V-Neck Shirt',
    price: '$35.00',
    rating: '4.6',
    stars: './assets/fi-ss-star.svg',
    category: 'new-arrivals',
  },
  {
    image: 'https://via.placeholder.com/150?text=Shirt+9',
    title: 'Silk Blend Shirt',
    price: '$47.00',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    category: 'new-arrivals',
  },
  {
    image: 'https://via.placeholder.com/150?text=Blouse+4',
    title: 'Printed Casual Blouse',
    price: '$50.00',
    rating: '5.0',
    stars: './assets/fi-ss-star.svg',
    category: 'new-arrivals',
  },
  {
    image: 'https://via.placeholder.com/150?text=Shirt+12',
    title: 'Slim Fit Shirt',
    price: '$42.00',
    rating: '4.8',
    stars: './assets/fi-ss-star.svg',
    category: 'new-arrivals',
  },


  // Sales
  
  {
    image: 'https://via.placeholder.com/150?text=Jacket+3',
    title: 'Gray Solid Padded Jacket',
    price: '$32.99',
    rating: '5.0',
    stars: './assets/fi-ss-star.svg',
    category: 'sales',
  },
  {
    image: 'https://via.placeholder.com/150?text=Jacket+4',
    title: 'Puffer Jacket',
    price: '$50.00',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    category: 'sales',
  },
  {
    image: 'https://via.placeholder.com/150?text=Blouse+5',
    title: 'Classic Blouse',
    price: '$42.00',
    rating: '4.7',
    stars: './assets/fi-ss-star.svg',
    category: 'sales',
  },
  {
    image: 'https://via.placeholder.com/150?text=Shirt+10',
    title: 'Casual Summer Shirt',
    price: '$25.00',
    rating: '4.5',
    stars: './assets/fi-ss-star.svg',
    category: 'sales',
  },
  {
    image: 'https://via.placeholder.com/150?text=Shirt+11',
    title: 'Comfortable Fit Shirt',
    price: '$22.00',
    rating: '4.8',
    stars: './assets/fi-ss-star.svg',
    category: 'sales',
  },
  {
    image: 'https://via.placeholder.com/150?text=Jacket+5',
    title: 'Outdoor Sports Jacket',
    price: '$60.00',
    rating: '5.0',
    stars: './assets/fi-ss-star.svg',
    category: 'sales',
  },
  {
    image: 'https://via.placeholder.com/150?text=Blouse+6',
    title: 'Elegant Silk Blouse',
    price: '$48.00',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    category: 'sales',
  },
  {
    image: 'https://via.placeholder.com/150?text=Shirt+13',
    title: 'Slim Fit Casual Shirt',
    price: '$30.00',
    rating: '4.7',
    stars: './assets/fi-ss-star.svg',
    category: 'sales',
  },

  // Accessories
  {
    image: 'https://via.placeholder.com/150?text=Hat+1',
    title: 'Stylish Hat',
    price: '$15.99',
    rating: '4.8',
    stars: './assets/fi-ss-star.svg',
    category: 'accessories',
  },
  {
    image: 'https://via.placeholder.com/150?text=Sunglasses+1',
    title: 'Sunglasses',
    price: '$20.00',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    category: 'accessories',
  },
  {
    image: 'https://via.placeholder.com/150?text=Bag+1',
    title: 'Leather Handbag',
    price: '$60.00',
    rating: '5.0',
    stars: './assets/fi-ss-star.svg',
    category: 'accessories',
  },
  {
    image: 'https://via.placeholder.com/150?text=Scarf+1',
    title: 'Silk Scarf',
    price: '$25.00',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    category: 'accessories',
  },
  {
    image: 'https://via.placeholder.com/150?text=Bracelet+1',
    title: 'Gold Bracelet',
    price: '$40.00',
    rating: '5.0',
    stars: './assets/fi-ss-star.svg',
    category: 'accessories',
  },
  {
    image: 'https://via.placeholder.com/150?text=Hat+2',
    title: 'Casual Hat',
    price: '$18.00',
    rating: '4.7',
    stars: './assets/fi-ss-star.svg',
    category: 'accessories',
  },
  {
    image: 'https://via.placeholder.com/150?text=Sunglasses+2',
    title: 'Polarized Sunglasses',
    price: '$22.00',
    rating: '4.8',
    stars: './assets/fi-ss-star.svg',
    category: 'accessories',
  },
  {
    image: 'https://via.placeholder.com/150?text=Bag+2',
    title: 'Canvas Tote Bag',
    price: '$30.00',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    category: 'accessories',
  },
];

const ProductList = ({ category }: { category: string }) => {
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-4 lg:grid-cols-4 gap-10 px-4">
      {filteredProducts.map((product) => (
        <div key={product.title} className="rounded-lg h-auto">
          <img src={product.image} alt={product.title} className="md:w-full w-2/4 mx-auto md:h-[312px] object-cover bg-[#EAEBF0] rounded-t-lg" />
          <div className="mt-4">
            <h3 className="text-[#373737] font-poppins font-semibold">{product.title}</h3>
            <div className="flex justify-around mx-16 items-center mt-4">
              <div className="text-[#454545] font-semibold ml-2 font-poppins">{product.price}</div>
              <div className="border-l border-[#224f34] h-6 mx-4"></div>
              <div className="flex items-center mr-2">
                <span className="text-[#454545] font-poppins font-semibold mr-1">{product.rating}</span>
                <img src={product.stars} alt="Rating star" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main product layout
const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('hot'); // Default to 'hot'

  return (
    <div className="bg-white py-16 text-center">
      <h2 className="text-[#224f34] font-roboto-slab text-5xl font-medium">Our Products</h2>

      <div className="flex justify-center md:space-x-10 space-x-4 text-sm font-poppins font-bold  my-8">
        <button
          className={`nav-link ${selectedCategory === 'sales' ? 'text-[#267d49] underline underline-offset-8 decoration-4' : 'text-[#454545]'}`}
          onClick={() => setSelectedCategory('sales')}
        >
          SALE
        </button>
        <button
          className={`nav-link ${selectedCategory === 'hot' ? 'text-[#267d49] underline underline-offset-8 decoration-4' : 'text-[#454545]'}`}
          onClick={() => setSelectedCategory('hot')}
        >
          HOT
        </button>
        <button
          className={`nav-link ${selectedCategory === 'new-arrivals' ? 'text-[#267d49] underline underline-offset-8 decoration-4' : 'text-[#454545]'}`}
          onClick={() => setSelectedCategory('new-arrivals')}
        >
          NEW ARRIVALS
        </button>
        <button
          className={`nav-link ${selectedCategory === 'accessories' ? 'text-[#267d49] underline underline-offset-8 decoration-4' : 'text-[#454545]'}`}
          onClick={() => setSelectedCategory('accessories')}
        >
          ACCESSORIES
        </button>
      </div>

      {/* Dynamically render products based on selected category */}
      <ProductList category={selectedCategory} />
    </div>
  );
};

export default ProductsSection;