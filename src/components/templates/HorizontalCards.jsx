import React from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.svg";

const HorizontalCards = ({ data, title }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
      {data.length > 0 ? (
        data?.map((d, i) => (
          <Link
            key={i}
            to={`/${d.media_type || title}/details/${d.id}`}
            className="min-w-[15%] h-[35vh] bg-zinc-900 mr-5 mb-5"
          >
            <img
              className="w-full h-[55%] object-cover"
              src={
                d.poster_path || d.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.poster_path || d.backdrop_path
                    }`
                  : noImage
              }
              alt={d.title || d.name}
            />
            <div className="text-white p-3 h-[45%] overflow-y-auto">
              <h1 className="text-xl font-semibold">
                {d.title || d.name || d.original_title || d.original_name}
              </h1>
              <p>
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl mt-5 text-white font-black text-center">
          Nothing to show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;
