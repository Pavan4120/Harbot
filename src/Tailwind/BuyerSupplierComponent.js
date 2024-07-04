import React, { useState } from 'react';
import { FaUser, FaTruck, FaCheck } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import '../index.css'; // Ensure you import your custom CSS

const BuyerSupplierComponent = () => {
  const [active, setActive] = useState('buyer');

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-7xl p-20 bg-blue-900 text-white rounded-lg shadow-lg">
        <div className="flex flex-wrap justify-between items-start">
          <div className="flex flex-col items-center w-full custom-md-w-1-2">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=IZLp-TZyDkQ"
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 md:pl-8">
            <div className="flex justify-around items-center mb-4">
              <div
                className={`flex flex-col items-center cursor-pointer ${active === 'buyer' ? 'text-orange-500 border-orange-active underline-on-active' : 'text-gray-400'}`}
                onClick={() => setActive('buyer')}
              >
                <FaUser size={30} />
                <h2 className="text-xl font-bold mt-2">Buyer</h2>
              </div>
              <div
                className={`flex flex-col items-center cursor-pointer ${active === 'supplier' ? 'text-orange-500 border-orange-active underline-on-active' : 'text-gray-400'}`}
                onClick={() => setActive('supplier')}
              >
                <FaTruck size={30} />
                <h2 className="text-xl font-bold mt-2">Supplier</h2>
              </div>
            </div>
            <div className="mt-6">
              {active === 'buyer' && (
                <ul className="space-y-4">
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-green-500 mr-2" />
                    Post your requirements.
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-green-500 mr-2" />
                    Sit back for multiple suppliers to contact you.
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Choose among the suppliers based on the ratings and reviews.
                  </li>
                </ul>
              )}
              {active === 'supplier' && (
                <ul className="space-y-4">
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-green-500 mr-2" />
                    Review buyer requirements.
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-green-500 mr-2" />
                    Contact buyers with your offers.
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Provide ratings and reviews for buyers.
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerSupplierComponent;
