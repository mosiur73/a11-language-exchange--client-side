import React from 'react';
import { Link } from 'react-router-dom';

const SectionTwo = () => {
    return (
        <div>
           
           <div className="relative bg-cover bg-center h-screen flex items-center justify-center"
             style={{ backgroundImage: "url('https://i.ibb.co.com/Qdp36fv/28732230-7475913.jpg')" }}>
            <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-5xl">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Visit Our Language Resources Centre</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    State-of-the-art language learning facilities and online resources.
                </p>
                <Link to="/resources">
                    <button className="bg-green-500 text-white py-3 px-6 text-lg rounded-md hover:bg-green-600">
                        Visit Now!
                    </button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default SectionTwo;