import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button'; // Assuming you have ShadCN/UI installed
import { Menu, X, ShoppingCart } from 'lucide-react';
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return ( 
        <div className='h-fit bg-[#c2efd4]'>
        {/* Header Section */}
        <header className="flex justify-between  items-center  p-5">
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
            {['Home', 'Shop', 'Features', 'Contact' ,].map((link, index) => (
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
            <Link to="/cart" className=" hover:text-white transition-colors duration-300">
            <ShoppingCart />
            </Link>
            <Button
              asChild
              variant="ghost"
              className="hover:bg-white hover:text-[#224f34] transition-colors duration-300 text-sm"
            >
              <Link to="/login" className="text-[#224f34] border-[#224f34] border ">
                Login
              </Link>
            </Button>
          </motion.nav>
        )}
        </div>
    );
}
 
export default NavBar;