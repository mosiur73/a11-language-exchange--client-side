import React from 'react';
import { FaFlag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Resorce = () => {
    const countries = [
        { name: 'France', flag: <FaFlag />, language: 'French', capital: 'Paris' },
        { name: 'Japan', flag: <FaFlag />, language: 'Japanese', capital: 'Tokyo' },
        { name: 'Brazil', flag: <FaFlag />, language: 'Portuguese', capital: 'Brasília' },
        { name: 'India', flag: <FaFlag />, language: 'Hindi', capital: 'New Delhi' },
        { name: 'Germany', flag: <FaFlag />, language: 'German', capital: 'Berlin' },
        { name: 'Australia', flag: <FaFlag />, language: 'English', capital: 'Canberra' },
        { name: 'Canada', flag: <FaFlag />, language: 'English/French', capital: 'Ottawa' },
        { name: 'China', flag: <FaFlag />, language: 'Mandarin', capital: 'Beijing' },
        { name: 'Italy', flag: <FaFlag />, language: 'Italian', capital: 'Rome' },
        { name: 'Mexico', flag: <FaFlag />, language: 'Spanish', capital: 'Mexico City' },
        { name: 'South Africa', flag: <FaFlag />, language: '11 Official Languages', capital: 'Pretoria' },
        { name: 'Russia', flag: <FaFlag />, language: 'Russian', capital: 'Moscow' },
        { name: 'United Kingdom', flag: <FaFlag />, language: 'English', capital: 'London' },
        { name: 'United States', flag: <FaFlag />, language: 'English', capital: 'Washington, D.C.' },
        { name: 'Spain', flag: <FaFlag />, language: 'Spanish', capital: 'Madrid' },
        { name: 'Turkey', flag: <FaFlag />, language: 'Turkish', capital: 'Ankara' },
        { name: 'Argentina', flag: <FaFlag />, language: 'Spanish', capital: 'Buenos Aires' },
        { name: 'Egypt', flag: <FaFlag />, language: 'Arabic', capital: 'Cairo' },
        { name: 'Thailand', flag: <FaFlag />, language: 'Thai', capital: 'Bangkok' },
        { name: 'South Korea', flag: <FaFlag />, language: 'Korean', capital: 'Seoul' },
      ];
      
    return (
        <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Language Resources Centre</h1>
        <div className="container mx-auto py-10">
    <h1 className="text-3xl font-bold text-center mb-8">Country Information</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((country, index) => (
        <Link
         
          className="block p-4 bg-white shadow-md rounded-lg hover:shadow-2xl transition-shadow"
        >
          <div className="text-4xl mb-2">{country.flag}</div>
          <h2 className="text-xl font-semibold mb-1">{country.name}</h2>
          <p className="text-gray-600">Language: {country.language}</p>
          <p className="text-gray-600">Capital: {country.capital}</p>
        </Link>
      ))}
    </div>
  </div>
    </div>
    );
};

export default Resorce;