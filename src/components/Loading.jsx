import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#1F1E24]">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-t-[#6556CD] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-t-transparent border-r-[#8678E0] border-b-transparent border-l-transparent rounded-full animate-spin" style={{animationDuration: '1.5s'}}></div>
        <div className="absolute inset-4 border-4 border-t-transparent border-r-transparent border-b-[#4E41B0] border-l-transparent rounded-full animate-spin" style={{animationDuration: '2s'}}></div>
      </div>
      <h2 className="mt-6 text-xl font-medium text-white">Loading<span className="animate-pulse">...</span></h2>
      <p className="mt-2 text-zinc-400">Fetching the latest content for you</p>
    </div>
  );
};

export default Loading;
