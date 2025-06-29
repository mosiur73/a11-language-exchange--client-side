import React from 'react';
import { FaEnvelope, FaHeadphones, FaUserPlus } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="bg-[#00A7B5] py-12 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 px-4">
        {/* Get Quote */}
        <div className="flex flex-col items-center text-center text-white">
          <FaEnvelope className="text-5xl mb-4" />
          <h3 className="text-xl text-[#F3E148] font-semibold mb-2">
            Get Quote
          </h3>
          <p className="text-white">
            Find the price of your ideal course
          </p>
        </div>

        {/* Ask a Question */}
        <div className="flex flex-col items-center text-center text-white">
          <FaHeadphones className="text-5xl mb-4" />
          <h3 className="text-xl text-[#F3E148] font-semibold mb-2">
            Ask a Question
          </h3>
          <p className="text-white">
            Not sure what you need? Ask our Advisors
          </p>
        </div>

        {/* Join Today */}
        <div className="flex flex-col items-center text-center text-white">
          <FaUserPlus className="text-5xl mb-4" />
          <h3 className="text-xl text-[#F3E148] font-semibold mb-2">
            Join Today
          </h3>
          <p className="text-white">
            Sign Up Now for a Free 30 Day Trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
