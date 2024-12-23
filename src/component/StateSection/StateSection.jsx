import React from 'react';

const StateSection = () => {

    const stats = [
        { value: "32,000+", label: "Experienced tutors" },
        { value: "300,000+", label: "5-star tutor reviews" },
        { value: "120+", label: "Subjects taught" },
        { value: "180+", label: "Tutor nationalities" },
        { value: "4.8 ★", label: "on the App Store" },
      ];
    return (
        <div className="flex flex-wrap justify-center gap-12 p-6 rounded-lg shadow-md">
        {stats.map((stat, index) => (
          <div key={index} className="text-center bg-gray-200 p-4 ">
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    );
};

export default StateSection;