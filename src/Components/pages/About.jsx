import React from "react";

const About = () => {
  return (
    <div className="flex quicksand flex-col justify-center items-center w-full h-screen gap-8 p-4 pt-0" style={{backgroundColor: 'black'}}>
      <div className="flex justify-center items-start text-center text-[4rem] quicksand font-medium w-full" style={{color: 'white'}}>
        About Us
      </div>

      <div className="bg-slate-500 p-4 h-[400px] w-[70%] flex justify-center align-center items-center rounded-lg border-0 hover:border-[#b6ffa2cb] hover:border-1 hover:border-solid hover:shadow-lg hover:bg-gradient-to-br from-[#b6ffa2cb] via-[#878b8be4] to-transparent">
        <div>
          <h2 className="text-[30px]">Welcome To LENS</h2>
          <p className="w-[40%]">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don't have
            to.
          </p>
        </div>

        <div>IMAGE HERE</div>
      </div>
    </div>
  );
};

export default About;
