import React from "react";
import Card from "../Cards/Card";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-8 p-4 pt-0 pb-8" style={{backgroundColor: 'black', color: 'white'}}>
      <div className="flex justify-center text-[3.8rem] quicksand font-semibold w-full h-full">
        Services
      </div>
      <div className="quicksand text-[4.2rem]">
      We provide Artificial Intelligence Services
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Card />
          <Card />
        </div>
        <div className="flex flex-col gap-4">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Services;
