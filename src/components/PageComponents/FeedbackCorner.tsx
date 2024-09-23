import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 // Custom CSS for Swiper pagination

const feedbackData = [
  { name: "Sarah Johnson", feedback: "Absolutely love the quality of the dresses! Perfect for any occasion." },
  { name: "Mike Adams", feedback: "The accessories are top-notch! I’ve received so many compliments on my new handbag." },
  { name: "Emily Davis", feedback: "Great customer service and fast delivery. I’m very satisfied with my purchase." },
  { name: "John Smith", feedback: "The shoes are very comfortable and stylish. I wear them every day!" },
  { name: "Anna Brown", feedback: "I love the variety of products available. There’s something for everyone." },
  { name: "David Lee", feedback: "The jackets are perfect for winter, stylish and warm at the same time." },
  { name: "Sophie Wilson", feedback: "Excellent collection of designer clothes. Will definitely shop here again." }
];

const FeedbackCorner: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);



  return (
    <div className="relative my-20 w-full max-w-7xl mx-auto p-6">
      <h2 className="md:text-5xl text-3xl font-medium mb-10 text-center font-roboto-slab text-green-900">Feedback Corner</h2>
      <Swiper
        modules={[Navigation , Autoplay]}
        autoplay={{ delay: 2000 }}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}

        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {feedbackData.map((feedback, index) => (
          <SwiperSlide key={index}>
            <div className={`p-10 m-4 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-white' : 'bg-[#C2EFD4]'}`}>
              <p className="text-[#224F34] text-7xl font-rufina">“</p>
              <h3 className="text-lg font-semibold font-roboto-serif text-green-900">{feedback.name}</h3>
              <p className="text-[#224F34] font-medium font-poppins mt-2">{feedback.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows Below the Slides */}
      <div className="flex justify-center mt-6 space-x-4">
        <div
          ref={prevRef}
          className="cursor-pointer p-2 bg-white text-[#224F34]  shadow-lg hover:bg-green-600 transition duration-300"
        >
          <ChevronLeft size={16} />
        </div>
        <div
          ref={nextRef}
          className="cursor-pointer p-2 bg-[#C2EFD4] text-[#224F34]  shadow-lg hover:bg-green-600 transition duration-300"
        >
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCorner;
