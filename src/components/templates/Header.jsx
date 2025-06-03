import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.title || data.name || data.original_title || data.original_name}
      </h1>
      <p className="w-[70%] mt-3 mb-3 text-white">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400">more</Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
        {data.release_date || "No Information"}
        <i className="text-yellow-500 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link className="mt-5 bg-[#6556CD] p-4 roudned">Watch Trailer</Link>
    </div>
  );
};

export default Header;
