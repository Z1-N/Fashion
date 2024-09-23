import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
    } else {
      setSubscribed(true);
      setError('');
      setEmail(''); // Reset the email input

      // Revert back to the form after 2 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 2000);
    }
  };

  return (
    <footer className="bg-green-900 w-full text-white mt-40 px-6 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Logo and Social Media Section */}
        <div>
          <h1 className="font-elephant text-4xl sm:text-5xl">Rivo</h1>
          <h2 className="font-roboto-slab font-medium text-base sm:text-base mt-6 uppercase">
            Social Media
          </h2>
          <div className="flex gap-4 mt-4">
            <a href="#"><img src="assets/facebook.svg" className="w-6 h-6 sm:w-8 sm:h-8" /></a>
            <a href="#"><img src="assets/twitter.svg" className="w-6 h-6 sm:w-8 sm:h-8" /></a>
            <a href="#"><img src="assets/instagram.svg" className="w-6 h-6 sm:w-8 sm:h-8" /></a>
          </div>
        </div>

        {/* Shop Section */}
        <div>
          <h2 className="font-roboto-slab font-medium text-lg sm:text-xl uppercase">
            Shop
          </h2>
          <ul className="mt-4 text-[#C2EFD4] space-y-3">
            <li className="font-poppins font-medium text-sm sm:text-base">
              <a href="#" className="hover:text-[#A3F3BE] transition duration-300 ease-in-out">
                Products
              </a>
            </li>
            <li className="font-poppins font-medium text-sm sm:text-base">
              <a href="#" className="hover:text-[#A3F3BE] transition duration-300 ease-in-out">
                Overview
              </a>
            </li>
            <li className="font-poppins font-medium text-sm sm:text-base">
              <a href="#" className="hover:text-[#A3F3BE] transition duration-300 ease-in-out">
                Pricing
              </a>
            </li>
            <li className="font-poppins font-medium text-sm sm:text-base">
              <a href="#" className="hover:text-[#A3F3BE] transition duration-300 ease-in-out">
                Releases
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="font-roboto-slab font-medium text-lg sm:text-xl uppercase">
            Company
          </h2>
          <ul className="mt-4 mx-2 text-[#C2EFD4] space-y-3">
            <li className="font-poppins font-medium text-sm sm:text-base">
              <a href="#" className="hover:text-[#A3F3BE] transition duration-300 ease-in-out">
                About Us
              </a>
            </li>
            <li className="font-poppins font-medium text-sm sm:text-base">
              <a href="#" className="hover:text-[#A3F3BE] transition duration-300 ease-in-out">
                Contact
              </a>
            </li>
            <li className="font-poppins font-medium text-sm sm:text-base">
              <a href="#" className="hover:text-[#A3F3BE] transition duration-300 ease-in-out">
                News
              </a>
            </li>
            <li className="font-poppins font-medium text-sm sm:text-base">
              <a href="#" className="hover:text-[#A3F3BE] transition duration-300 ease-in-out">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Up to Date Section */}
        <div>
          <h2 className="font-roboto-slab font-medium text-lg sm:text-xl uppercase">
            Stay Up to Date
          </h2>
          {/* Conditional Subscribed Message */}
          {subscribed ? (
            <div className="mt-4 bg-[#A3F3BE] text-[#224F34] p-4 rounded-lg font-poppins text-center">
              Subscribed ✅
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="border  border-[#A3F3BE] flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full placeholder-white ml-1 p-1 h-10 text-sm bg-transparent focus:outline-none font-poppins text-white"
                />
                <button className="bg-[#A3F3BE] text-[#224F34] h-10 px-4 sm:px-6 border-l-0 font-poppins font-medium uppercase text-sm sm:text-base">
                  Submit
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2 font-poppins">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Divider Line and Footer Links in Same Flex Container */}
      <div className="mt-8  flex justify-center items-center space-x-10 sm:space-x-8">
        <img src="assets/line.svg" alt="" className="md:grow sm:w-1/6 h-1" />
        <div className="text-white text-sm sm:text-lg font-poppins hidden md:inline  mt-2 font-semibold ">
          <a href="#" className="mx-2">Terms</a>
          <a href="#" className="mx-2">Privacy</a>
          <a href="#" className='mx-2'>Cookies</a>
        </div>
      </div>
        <div className="text-white text-sm sm:text-lg font-poppins block md:hidden mt-2 font-semibold ">
          <a href="#" className="mx-2">Terms</a>
          <a href="#" className="mx-2">Privacy</a>
          <a href="#" className='mx-2'>Cookies</a>
        </div>
    </footer>
  );
};

export default Footer;
