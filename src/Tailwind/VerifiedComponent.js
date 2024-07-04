import React from 'react';
import '../index.css'; // Ensure you import your custom CSS

const VerifiedComponent = () => {
  return (
    <div className="bg-blue-100 p-20 rounded-md shadow-md flex flex-col items-start">
      <div className="w-full flex justify-end mb-4">
        <h1 className="text-4xl font-semibold mb-4">
          Let Suppliers <span className="underline decoration-red-500">Find You</span>
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 text-xl rounded hover:bg-red-600">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default VerifiedComponent;
