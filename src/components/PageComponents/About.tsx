import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-8 md:p-20 text-center ">
      {/* Header Section */}
      <header className="my-8">
        <h1 className="font-roboto-slab font-bold text-2xl md:text-4xl text-green-800 leading-tight mb-4">
          Designer Clothes For You
        </h1>
        <p className="font-poppins font-medium text-base md:text-lg text-green-700 leading-6 mx-auto max-w-3xl">
          Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
        </p>
      </header>

      {/* Main Content Section */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Accessories Section */}
        <section className="item">
          <img 
            src="assets/elegant-woman-straw-hat-isolated-2.svg" 
            alt="Accessories" 
            className="w-full h-auto max-w-xs bg-[#D3E2D7] mx-auto"
          />
          <h2 className="font-poppins font-semibold text-lg md:text-xl text-gray-800 mt-4">
            Accessories
          </h2>
          <p className="font-poppins font-semibold text-sm md:text-base text-[#373737] mt-2 mx-auto max-w-sm">
            Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.
          </p>
        </section>

        {/* Dresses Section */}
        <section className="item">
          <img 
            src="assets/pexels-dima-valkov-6211617-1.svg" 
            alt="Dresses" 
            className="w-full h-auto max-w-xs mx-auto"
          />
          <h2 className="font-poppins font-semibold text-lg md:text-xl text-gray-800 mt-4">
            Dresses
          </h2>
          <p className="font-poppins  text-sm md:text-base text-[#373737] font-semibold mt-2 mx-auto max-w-sm">
            Explore a stunning range of designer dresses, including evening gowns and chic day dresses.
          </p>
        </section>

        {/* Outerwear Section */}
        <section className="item">
          <img 
            src="assets/vknivfu-sdkvbjieurg-kjvn-1.svg" 
            alt="Outerwear" 
            className="w-full h-auto max-w-xs mx-auto"
          />
          <h2 className="font-poppins font-semibold text-lg md:text-xl text-gray-800 mt-4">
            Outerwear
          </h2>
          <p className="font-poppins  text-sm md:text-base text-[#373737]  font-semibold mt-2 mx-auto max-w-sm">
            Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
