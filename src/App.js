import React from 'react';
import { FaUserPlus, FaFileAlt, FaSearch, FaClipboardList, FaHandshake, FaComments, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Navbar from './Tailwind/Navbar';
import Hader from './Tailwind/Hader';
import BuyerSupplierComponent from './Tailwind/BuyerSupplierComponent';
import VerifiedComponent from './Tailwind/VerifiedComponent';
import './index.css';
import logo from './IMAGES/logo.png'; // Importing the logo image

const App = () => {
  return (
    <div>
      <Navbar />
      <Hader />
     
      
      <div className="container mx-auto flex flex-col md:flex-row p-10">
      {/* <div className="container mx-auto flex flex-col md:flex-row min-h-screen p-10"> */}

        {/* First Column */}
        <div className="w-full md:w-6/6 p-4">
          <div className="flex flex-col">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-left p-4">
                Ready to dive into <span className="text-blue-500">HABOT</span>?
              </h1>
            </header>
            {/* Content Paragraph */}
            <div className="p-4">
              <p className="text-lg text-gray-700 mb-4">
                Signing up with HABOT opens the door to a world of new opportunities 
                and potential for business growth. Gain access to a vibrant community 
                of like-minded individuals, unlock valuable resources, and take the first 
                step towards realizing your entrepreneurial dreams.
              </p>
              {/* Sign-Up Button */}
              <div className="flex justify-center md:justify-start">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-lg w-64">
                  Sign up Today &nbsp; &nbsp;&#8594;
                </button>
              </div>
            </div>
          </div>
        </div>

       {/* Second Column */}
<div className="w-full md:w-6/6 p-4">
  <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
    <button className="border-2 border-orange-500 hover:border-orange-700 text-gray-800 font-bold py-2 px-4 rounded py-6">
      Abu Dhabi
    </button>
    <button className="border-2 border-orange-500 hover:border-orange-700 text-gray-800 font-bold py-1.5 px-1.5 rounded py-6">
      Sharjah & Ajman
    </button>
    <button className="border-2 border-orange-500 hover:border-orange-700 text-gray-800 font-bold py-2 px-4 rounded py-6">
      Dubai
    </button>
    <button className="border-2 border-orange-500 hover:border-orange-700 text-gray-800 font-bold py-2 px-4 rounded py-6">
      Fujairah
    </button>
    <button className="border-2 border-orange-500 hover:border-orange-700 text-gray-800 font-bold py-2 px-4 rounded py-6">
      Ras Al Khaimah
    </button>
    <button className="border-2 border-orange-500 hover:border-orange-700 text-gray-800 font-bold py-2 px-4 rounded py-6">
      Umm Al Quwain
    </button>
  </div>
</div>
</div>

      <BuyerSupplierComponent />
      <VerifiedComponent />
      {/* Added Image Section */}
      <div className="bg-white py-10">
        <h2 className="text-3xl font-bold text-center mb-8">How it works?</h2>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
          potential buyers, and build successful business relationships, sharing valuable feedback.
        </p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          <div className="flex flex-col items-center justify-center bg-blue-50 p-6 rounded-lg shadow-lg h-64">
            <FaUserPlus className="text-5xl text-orange-500 mb-4" />
            <h3 className="font-bold text-lg text-center">Select Your Role and Sign Up</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg h-64">
            <FaFileAlt className="text-5xl text-orange-500 mb-4" />
            <h3 className="font-bold text-lg text-center">Buyers Post Your Requirements</h3>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-50 p-6 rounded-lg shadow-lg h-64">
            <FaSearch className="text-5xl text-orange-500 mb-4" />
            <h3 className="font-bold text-lg text-center">Review, Select, and Contact the Best Suppliers</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg h-64">
            <FaClipboardList className="text-5xl text-orange-500 mb-4" />
            <h3 className="font-bold text-lg text-center">Suppliers Complete your profile and get notified for opportunities</h3>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-50 p-6 rounded-lg shadow-lg h-64">
            <FaComments className="text-5xl text-orange-500 mb-4" />
            <h3 className="font-bold text-lg text-center">Contact to Buyers and Share your Quote for the service</h3>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg h-64">
            <FaHandshake className="text-5xl text-orange-500 mb-4" />
            <h3 className="font-bold text-lg text-center">Both the Parties can Connect and Make Business Leave a Feedback</h3>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-white py-10 p-20" style={{ backgroundColor: '#123557' }}>
  <div className="container mx-auto flex flex-wrap">
    
    {/* Logo and Sections (col-md-6) */}
    <div className="w-full md:w-6/12 flex flex-col md:flex-row">
    <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 md:w-3/12 pr-8"> {/* Added pr-8 for padding-right */}
    <div className="flex items-center space-x-2  style={{ paddingRight: '30px' }}">
          <img src={logo} alt="HABOT Logo" className="h-10 w-auto " /> {/* Adjust height (h-10) and width (w-auto) */}
        </div>
        <p >© R Singhania</p>
      </div>
      <div className="flex flex-col md:flex-row md:w-9/12 justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold">Company</h4>
          <ul>
            <li>About</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold">Terms</h4>
          <ul>
            <li>Data privacy</li>
            <li>Terms</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold">Related</h4>
          <ul>
            <li>Find Buyer</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* Empty Column (col-md-3) */}
    <div className="w-full md:w-3/12"></div>
    
    {/* Social Media Icons (col-md-3) */}
    <div className="w-full md:w-3/12 flex justify-center  space-x-4">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="text-2xl" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter className="text-2xl" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook className="text-2xl" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram className="text-2xl" />
      </a>
    </div>
    
  </div>
</footer>

    </div>
  );
};

export default App;
