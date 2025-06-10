import React from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.svg";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full px-[5%] bg-[#1F1E24]">
      <Link
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="fixed bottom-[5%] right-[5%] flex justify-center items-center w-[5vh] h-[5vh] bg-[#6556CD] hover:bg-[#8678E0] transition-all duration-300 rounded-full shadow-lg shadow-[#6556CD]/30 z-50"
      >
        <i className="text-white ri-arrow-up-line text-xl"></i>
      </Link>
      {data.map((c, i) => (
        <Link
          key={i}
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%] group transition-all duration-300 hover:scale-105"
        >
          <div className="overflow-hidden rounded-lg shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]">
            <img
              className="h-[40vh] object-cover w-full transition-all duration-500 group-hover:brightness-110"
              src={
                c.poster_path || c.backdrop_path || c.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      c.poster_path || c.backdrop_path || c.profile_path
                    }`
                  : noImage
              }
              alt={c.title || c.name}
            />
          </div>
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold group-hover:text-[#8678E0] transition-colors duration-300">
            {c.title || c.name || c.original_title || c.original_name}
          </h1>
          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-500 text-white w-[5vh] h-[5vh] flex justify-center items-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
