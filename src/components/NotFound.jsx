import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#1F1E24] p-5 text-center">
      <div className="text-[#6556CD] text-9xl font-bold mb-4">404</div>
      <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-zinc-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-gradient-to-r from-[#6556CD] to-[#4E41B0] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#6556CD]/30 transition-all duration-300"
      >
        <i className="ri-home-5-line mr-2"></i>
        Return to Home
      </Link>
      
      <div className="mt-16 relative">
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0 border-4 border-dashed border-zinc-700 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="ri-movie-2-line text-5xl text-zinc-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
