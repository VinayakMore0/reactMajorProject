import React from "react";
import notFound from "/404.gif";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="h-[50%] object-cover" src={notFound} alt="404" />
    </div>
  );
};

export default NotFound;
