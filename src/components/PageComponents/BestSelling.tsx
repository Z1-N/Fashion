import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    image: './assets/pexels-dima-valkov-6211621-1.svg',
    title: 'Regular Fit Long Sleeve Top',
    price: '$38.99',
    rating: '5.0',
    stars: './assets/fi-ss-star.svg',
    id: 'regular-fit-long-sleeve-top', // Unique ID or slug for routing
  },
  {
    image: './assets/pexels-dima-valkov-6211616-1-2.svg',
    title: 'Black Crop Tailored Jacket',
    price: '$62.99',
    rating: '4.9',
    stars: './assets/fi-ss-star.svg',
    id: 'black-crop-tailored-jacket',
  },
  {
    image: './assets/pexels-dima-valkov-6503007-3.svg',
    title: 'Textured Sunset Shirt',
    price: '$49.99',
    rating: '5.0',
    stars: './assets/fi-ss-star.svg',
    id: 'textured-sunset-shirt',
  },
];

const BestSelling: React.FC = () => {
  return (
    <div className="bg-white mx-4 md:mx-0 mt-20 py-10 sm:py-16 text-center">
      {/* Title Section */}
      <h2 className="text-[#224f34] font-roboto-slab  text-4xl sm:text-5xl lg:text-6xl font-medium">
        Best selling
      </h2>
      <p className="text-[#224f34] font-poppins font-semibold mt-4 mb-8 sm:mb-10 text-sm sm:text-base">
        Get in on the trend with our curated selection of best-selling styles.
      </p>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
        {products.map(product => (
          <Link key={product.id} to={`/shop`}>
            <motion.div
              className="w-64 sm:w-72 lg:w-80 h-auto p-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Image Container */}
              <div className="bg-[#c2efd4] p-4 rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover -m-4 rounded-t-lg"
                />
              </div>

              {/* Text Container Below the Card */}
              <div className="mt-4">
                <h3 className="text-[#373737] font-poppins font-semibold">
                  {product.title}
                </h3>
                <div className="flex justify-around mx-4 items-center mt-4">
                  <div className="text-[#454545] font-semibold ml-2 font-poppins">
                    {product.price}
                  </div>
                  <div className="border-l border-[#224f34] h-6 mx-4"></div>
                  <div className="flex items-center mr-2">
                    <span className="text-[#454545] font-poppins font-semibold mr-1">
                      {product.rating}
                    </span>
                    <img
                      src={product.stars}
                      alt="Rating star"
                      className="w-5 h-5  sm:w-6 sm:h-6"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Button */}
      <motion.button
        className="mt-8 sm:mt-10 bg-[#d9d9d9]/10 text-[#224f34] font-poppins font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg border-2 border-[#224f34] hover:bg-[#c2efd4] transition duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/shop">
          See all
          <img src="./assets/line-2.svg" alt="Arrow right" className="w-4 h-4 inline ml-2" />
        </Link>
      </motion.button>
    </div>
  );
}

export default BestSelling;
