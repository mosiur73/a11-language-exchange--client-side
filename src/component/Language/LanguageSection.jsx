import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const tabs = ['ENGLISH', 'GERMAN', 'SPANISH', 'FRENCH', 'CHINESE'];

const data = [
  {
    title: 'ENGLISH FOR CHILDREN',
    img: 'https://i.ibb.co/v67yWTMT/home-bg-1-1.jpg',
    price: 'Free',
    languages: ['Chinese', 'English'],
    duration: '12 Week',
    rating: 0,
  },
  {
    title: '30–60–90 BUSINESS',
    img: 'https://i.ibb.co/JwCN6LXK/home-bg-4-1.jpg',
    price: '$529.00',
    languages: ['Chinese', 'German'],
    duration: '24 Week',
    rating: 0,
  },
  {
    title: 'BASIC SKILLS',
    img: 'https://i.ibb.co/hxF24y2f/home-bg-6.jpg',
    price: '$150.00',
    languages: ['Chinese', 'French'],
    duration: '12 Week',
    rating: 0,
  },
  {
    title: 'SECOND LANGUAGE',
    img: 'https://i.ibb.co/RfFKnLd/home-bg-7.jpg',
    price: '$425.00',
    languages: ['Chinese', 'Spanish'],
    duration: '12 Week',
    rating: 0,
  },
  {
    title: 'SECOND LANGUAGE',
    img: 'https://i.ibb.co/wQz9Fm5/candidates-waiting-job-interview.jpg',
    price: '$425.00',
    languages: [ 'Spanish'],
    duration: '12 Week',
    rating: 0,
  },
  {
    title: 'First LANGUAGE',
    img: 'https://i.ibb.co/bL8S6sn/confident-applicant-smiling-job-interview-with-diverse-hr-managers.jpg',
    price: '$550.00',
    languages: [ 'Spanish'],
    duration: '12 Week',
    rating: 0,
  },
];

const LanguagesSection = () => {
  const [activeTab, setActiveTab] = useState('CHINESE');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-light text-gray-800 mb-8">
          Choose Your Language
        </h2>

        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wide border-b-2 transition-colors duration-300 ${
                activeTab === tab
                  ? 'border-green-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data
            .filter((course) =>
              course.languages.some(
                (lang) => lang.toLowerCase() === activeTab.toLowerCase()
              )
            )
            .map((course, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-gray-800 text-base font-semibold mb-2">
                    {course.title}
                  </h3>
                  <div className="flex text-gray-300 mb-2">
                    {[...Array(5)].map((_, i) =>
                      i < course.rating ? (
                        <FaStar key={i} />
                      ) : (
                        <FaRegStar key={i} />
                      )
                    )}
                  </div>
                  <div className="mb-2">
                    {course.price === 'Free' ? (
                      <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        Free
                      </span>
                    ) : (
                      <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                        {course.price}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 flex justify-between mt-2">
                    <span className="text-red-500">
                      {course.languages.join(', ')}
                    </span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
