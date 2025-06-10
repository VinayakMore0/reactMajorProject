import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1F1E24] text-white p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#6556CD]">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#49494C] ri-arrow-left-line"
        ></i>{" "}
        About Our MoviDB.
      </h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-8">
          Welcome to our comprehensive movie and TV show platform! We are
          passionate about bringing you the latest and greatest in entertainment
          content from around the world.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#6556CD]">
          Our Mission
        </h2>
        <p className="text-lg mb-8">
          Our mission is to provide a seamless and enjoyable experience for
          movie and TV enthusiasts, offering detailed information about trending
          shows, popular movies, and the people who make them.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#6556CD]">
          What We Offer
        </h2>
        <ul className="list-disc pl-6 mb-8 text-lg space-y-2">
          <li>Comprehensive database of movies and TV shows</li>
          <li>Up-to-date information on trending content</li>
          <li>
            Detailed profiles of actors, directors, and other industry
            professionals
          </li>
          <li>User-friendly interface for easy navigation</li>
          <li>Trailers and previews of upcoming releases</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#6556CD]">
          Our Team
        </h2>
        <p className="text-lg mb-8">
          We are a dedicated team of movie enthusiasts and web developers
          committed to creating the best possible platform for exploring the
          world of cinema and television.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
