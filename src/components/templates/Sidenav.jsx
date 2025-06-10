import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/trending", icon: "ri-fire-fill", label: "Trending" },
    { path: "/popular", icon: "ri-bard-fill", label: "Popular" },
    { path: "/movie", icon: "ri-movie-2-fill", label: "Movies" },
    { path: "/tv", icon: "ri-tv-2-fill", label: "TV Show" },
    { path: "/person", icon: "ri-team-fill", label: "People" },
  ];

  const infoItems = [
    { path: "/about-us", icon: "ri-information-fill", label: "About MoviDB." },
    { path: "/contact-us", icon: "ri-phone-fill", label: "Contact Us" },
  ];

  return (
    <div className="w-[20%] h-full border-r border-zinc-800 p-10 bg-[#1F1E24]">
      <Link to="/" className="block mb-10">
        <h1 className="text-2xl text-white font-bold flex items-center">
          <i className="text-[#6556CD] ri-tv-fill mr-2 text-3xl"></i>
          <span className="text-2xl">
            MoviDB<span className="text-[#6556CD]">.</span>
          </span>
        </h1>
      </Link>

      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-semibold text-xl mt-6 mb-4 pl-5">
          New Feeds
        </h1>

        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative overflow-hidden rounded-xl p-4 transition-all duration-300 flex items-center ${
              isActive(item.path)
                ? "bg-[#6556CD] text-white"
                : "hover:text-white"
            }`}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {!isActive(item.path) && hoveredItem === item.path && (
              <div className="absolute inset-0 bg-[#6556CD] opacity-10"></div>
            )}
            <i
              className={`mr-3 ${item.icon} ${
                isActive(item.path) ? "text-white" : "text-[#6556CD]"
              }`}
            ></i>
            {item.label}
            {isActive(item.path) && (
              <div className="absolute right-4">
                <i className="ri-arrow-right-s-line"></i>
              </div>
            )}
          </Link>
        ))}
      </nav>

      <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

      <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-semibold text-xl mb-4 pl-5">
          Website Information
        </h1>

        {infoItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative overflow-hidden rounded-xl p-4 transition-all duration-300 flex items-center ${
              isActive(item.path)
                ? "bg-[#6556CD] text-white"
                : "hover:text-white"
            }`}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {!isActive(item.path) && hoveredItem === item.path && (
              <div className="absolute inset-0 bg-[#6556CD] opacity-10"></div>
            )}
            <i
              className={`mr-3 ${item.icon} ${
                isActive(item.path) ? "text-white" : "text-[#6556CD]"
              }`}
            ></i>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-10">
        <div className="p-5 rounded-xl bg-gradient-to-br from-[#6556CD] to-[#4E41B0] text-white">
          <h3 className="font-bold mb-2">Need Help?</h3>
          <p className="text-sm opacity-90 mb-3">
            Have questions or feedback about MoviDB?
          </p>
          <Link
            to="/contact-us"
            className="inline-block px-4 py-2 bg-white text-[#4E41B0] rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
