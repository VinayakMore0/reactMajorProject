import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import noImage from "/noImage.svg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearchers] = useState([]);
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearchers(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto items-center">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search Anything..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill right-0"
        ></i>
      )}
      <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">
        {searches?.map((s, i) => (
          <Link
            key={i}
            to={`/${s.media_type}/details/${s.id}`}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noImage
              }
              alt={s.title || s.name}
            />
            <span>
              {s.title || s.name || s.original_title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
