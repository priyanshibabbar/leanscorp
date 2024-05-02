import React from 'react';

const Card = () => {
  return (
    <div className='bg-slate-500 w-[380px] h-[300px] flex flex-col justify-center items-center rounded-md text-center  border-0 hover:border-[#ff995ed1] hover:border-2 hover:border-solid hover:shadow-lg hover:bg-gradient-to-br from-[#ff995ed5] via-[#878b8be4] to-transparent'>
      <span>TEXT Content here</span>
    </div>
  );
};

export default Card;
