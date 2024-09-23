import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button'; // Assuming you have ShadCN/UI installed
import { Menu, X } from 'lucide-react'; // Assuming you use Lucide icons or similar

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#c2efd4] min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 md:p-10">
        <motion.div
          className="text-[#224f34] font-elephant text-3xl md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Rivo
        </motion.div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 md:space-x-10 text-[#224f34]">
          {['Home', 'Shop', 'Features', 'Contact'].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg"
            > 
              <Button
                asChild
                variant="ghost"
                 className="hover:bg-white text-md md:text-lg hover:text-[#224f34] transition-colors duration-300 modern-underline"
              >
                <Link to={`/${link.toLowerCase()}`}>{link}</Link>
              </Button>
            </motion.div>
          ))}
        </nav>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="hover:bg-white text-[#224f34]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        {/* Login and Cart */}
        <motion.div
          className="hidden md:flex space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
            <motion.img
              src="./assets/group-1.svg"
              alt="Cart"
              className="w-6 h-6 md:w-8 md:h-8"
              whileHover={{ scale: 1.1 }}
            />
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              asChild
              variant="ghost"
              className="hover:bg-white hover:text-[#224f34] transition-colors duration-300 text-sm md:text-lg"
            >
              <Link to="/login" className="text-[#224f34] border-[#224f34] border ">
                Login
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </header>

      {/* Mobile Navigation Links (Burger Menu) */}
      {isMenuOpen && (
        <motion.nav
          className="flex flex-col items-center space-y-4 bg-[#c2efd4] text-[#224f34] p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {['Home', 'Shop', 'Features', 'Contact'].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg"
            >
              <Button
                asChild
                variant="ghost"
                className="hover:bg-white text-md hover:text-[#224f34] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                <Link to={`/${link.toLowerCase()}`}>{link}</Link>
              </Button>
            </motion.div>
          ))}
        </motion.nav>
      )}

      {/* Main Section */}
      <main className="flex flex-col items-center text-center md:text-left md:flex-row px-6 md:px-10">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 p-6 md:p-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#224f34] font-rufina text-[48px] md:text-[86px] leading-tight">
            Discover and Find Your Own Fashion!
          </h1>
          <p className="text-[#267d49] font-poppins text-base md:text-lg leading-relaxed mt-6 max-w-md">
            Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
          </p>
          <motion.button
            className="mt-8 bg-[#224f34] text-white shadow-2xl shadow-black font-poppins font-semibold text-sm md:text-lg py-3 px-5 md:py-4 md:px-6 hover:bg-white hover:text-[#224f34] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/shop">
            Explore Now
            </Link>
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 p-6 md:p-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="./assets/mask-group.svg"
            alt="Fashion Model"
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;
