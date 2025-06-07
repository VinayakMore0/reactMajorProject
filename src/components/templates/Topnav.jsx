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
        className="w-[50%] text-zinc-400 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill right-0"
        ></i>
      )}
      <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">
        {searches?.map((search, i) => (
          <Link
          to={`/${search.media_type}/details/${search.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                search.backdrop_path || search.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      search.backdrop_path || search.profile_path
                    }`
                  : noImage
              }
              alt={search.title || search.name}
            />
            <span>
              {search.title ||
                search.name ||
                search.original_title ||
                search.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
