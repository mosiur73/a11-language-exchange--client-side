import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FindTutorCard from './FindTutorCard';

const FindTutors = () => {
  const [language, setLanguage] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchAllLanguage = async () => {
      const { data } = await axios.get(
        `https://assignment11-language-exchange-server.vercel.app/language?search=${search}`
      );
      setLanguage(data);
    };
    fetchAllLanguage();
  }, [search]);

  // Correct sorting logic
  const sortedLanguages = [...language].sort((a, b) => {
    if (sortOrder === 'asc') {
      return Number(a.price) - Number(b.price);
    } else {
      return Number(b.price) - Number(a.price);
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Find Tutors
        </h1>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center">
            <label
              htmlFor="sortOrder"
              className="mr-2 text-black font-medium"
            >
              Sort By:
            </label>
            <select
              id="sortOrder"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Price Low → High</option>
              <option value="desc">Price High → Low</option>
            </select>
          </div>

          <form
            className="w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex overflow-hidden border border-gray-300 rounded-lg focus-within:ring focus-within:ring-blue-500">
              <input
                className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 bg-white focus:outline-none"
                type="text"
                name="search"
                placeholder="Search by language..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 font-semibold"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedLanguages.length > 0 ? (
          sortedLanguages.map((lang) => (
            <FindTutorCard key={lang._id} lang={lang} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No tutors found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FindTutors;
