import React from "react";
import Card from "../Cards/Card";


const Blogs = () => {
  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <div className="flex justify-center align-middle text-[4rem] quicksand font-medium w-full h-full">
        Our Blogs
      </div>
      <div className="flex gap-3 justify-center items-center ">
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  );
};

export default Blogs;
