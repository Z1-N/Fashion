import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

const getRandomTime = () => {
  // Generate a random time between 1 hour (3600000 ms) and 7 days (604800000 ms)
  const minTime = 3600000; // 1 hour in milliseconds
  const maxTime = 604800000; // 7 days in milliseconds
  return Math.floor(Math.random() * (maxTime - minTime) + minTime);
};

const calculateTimeLeft = (randomTime: number) => {
  const difference = randomTime - +new Date();
  let timeLeft: TimeLeft = { days: 7, hours: 0, minutes: 0, };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      
    };
  }

  return timeLeft;
};

const ExclusiveOffer: React.FC = () => {
  const [randomTime] = useState(+new Date() + getRandomTime());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(randomTime));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(randomTime));
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, randomTime]);

  return (
    <div className="bg-[#C2EFD4] p-4 flex flex-row items-center md:max-w-5xl md:mx-auto mx-4 justify-around relative">
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative mb-6 md:mb-0">
        <img 
          src="./assets/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing-1.svg" 
          alt="Exclusive Offer" 
          className="object-cover w-full md:w-2/4 mx-auto h-auto"
        />
        <motion.img
          src="./assets/group-37.svg"
          alt="Exclusive Offer"
          className="absolute left-4 md:left-16 bottom-2 md:bottom-0  w-3/12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* Text and Timer Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-roboto-slab text-[#224F34] mb-4">Exclusive Offer</h1>
        <p className="text-xs md:text-lg  font-poppins font-medium text-[#224F34] mb-6">
          Unlock the ultimate style upgrade with our exclusive offer. Enjoy savings of up to 40% off on our latest New Arrivals.
        </p>
        <div className="flex justify-center md:justify-start space-x-2 md:space-x-4 mb-6">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div
              key={unit}
              className="bg-white text-green-800 w-14 md:w-auto p-2 md:p-4 rounded-md shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
            >
              <span className="block text-lg md:text-2xl font-semibold">{String(value).padStart(2, '0')}</span>
              <span className="block text-xs md:text-sm capitalize">{unit}</span>
            </motion.div>
          ))}
        </div>
        <Link to ="/shop">
        <button className="bg-green-700 text-white px-2 py-1 text-base md:px-6 md:py-3 rounded-md shadow-md transition hover:bg-green-600">
          BUY NOW
        </button>
        </Link>
      </div>
    </div>
  );
}

export default ExclusiveOffer;
