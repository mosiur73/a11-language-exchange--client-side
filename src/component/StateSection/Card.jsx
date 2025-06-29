import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const StatsCard = () => {
  return (
    <div className="font-sans bg-[url('https://i.ibb.co/39MmBHW5/keyboard-tea-cup-apple-office-stationeries-black-background.jpg')] bg-cover bg-center bg-no-repeat h-96 mx-auto p-5 text-center ">
      <h2 className="text-white text-2xl mb-8 font-bold uppercase">Enguage School In Number</h2>
      <Zoom>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
        <div data-aos="zoom-in-left" className="bg-base-300 p-5 rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-white mb-1">258</div>
          <div className="text-sm text-white uppercase tracking-wider">STUDENTS</div>
        </div>
        
        <div className="bg-base-300 p-5 rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-white mb-1">35</div>
          <div className="text-sm text-white uppercase tracking-wider">LEARNING PROBLEMS</div>
        </div>
        
        <div className="bg-base-300 p-5 rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-white mb-1">12</div>
          <div className="text-sm text-white uppercase tracking-wider">LANGUAGE TRAININGS</div>
        </div>
        
        <div className="bg-base-300 p-5 rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-white mb-1">9</div>
          <div className="text-sm text-white uppercase tracking-wider">BRANCHES</div>
        </div>
        
        <div className="bg-base-300 p-5 rounded-lg shadow-sm item" data-aos="zoom-in">
          <div className="text-4xl font-bold text-white mb-1">16</div>
          <div className="text-sm text-white uppercase tracking-wider">TEACHERS</div>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default StatsCard;
