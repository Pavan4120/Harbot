import React from 'react';
import backgroundImage from '../IMAGES/bg.png'; // Import the background image
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const Hader = () => {
  return (
    <section className="relative text-center mb-8 bg-opacity-75"
             style={{
               backgroundImage: `url(${backgroundImage})`, // Set background image dynamically
               backgroundSize: 'cover', // Cover the entire section
               backgroundPosition: 'center', // Center the background image
               height: '600px', // Adjust height as needed
             }}
    >
      <div className="bg-cyan-900 bg-opacity-75 h-full flex flex-col justify-center items-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Are You a Supplier?</h2>
        <h3 className="text-2xl font-extrabold text-white mb-8">Explore Matching Opportunities.</h3>
        <div className="flex justify-center space-x-4 mb-4">
          <div className="relative">
            <FaBriefcase className="absolute left-3 top-5 text-gray-500" />
            <input type="text" placeholder="Search your required service here" className="pl-10 rounded p-2 m-2 w-80" />
          </div>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-5 text-gray-500" />
            <input type="text" placeholder="Search your desired location here" className="pl-10 rounded p-2 m-2 w-80" />
          </div>
          <button className="bg-green-500 text-white p1-10 rounded p-2 m-2 w-40">Search</button>
        </div>
        <div className="text-white text-center font-bold">
          <p>Are you a buyer?&nbsp;&nbsp;
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <button className="text-white underline" onClick={() => {}}>
            Click here if you are looking to post a requirement
          </button></p>
        </div>
      </div>
    </section>
  );
}

export default Hader;
