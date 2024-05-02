import React from "react";
import Card from '../Cards/Card'

const WhyUs = () => {
  return (
    <div className="flex flex-col justify-center align-middle w-full h-full">
      <div className="flex justify-center text-[4rem] quicksand font-medium w-full h-full">
        Why Choose Us?
      </div>

      <div className="flex flex-col justify-center align-middle h-full w-full p-10 quicksand gap-4">
        <h1 className="text-[30px] text-center">
          AI-DRIVEN SOLUTIONS BACKED BY SCIENCE
        </h1>

        <p className="text-[20px] text-center pt-4">
          Every piece of AI technology shipped from LENS is thoroughly
          benchmarked via rigorous evaluations. With a global network of experts
          and academicians, we guarantee the most accurate and robust solutions
          in the market.
        </p>
        <div className="flex w-full justify-center align-middle h-full gap-8 pt-8">
          <div className="flex flex-col">
            <span>State-of-the-art solutions</span>
            <span>Fast & Efficient</span>
            <span>No extra computation fee</span>
            <span>No licensing fee</span>
          </div>
          <div className="flex flex-col">
            <span>Lifetime support & upgrades</span>
            <span>Plug-and-Play</span>
            <span>24x7 Progress Monitoring</span>
            <span>Incremental Updates</span>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
