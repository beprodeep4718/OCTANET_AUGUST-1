import React from "react";

function Marquee() {
  return (
    <div className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex gap-10 whitespace-nowrap">
        <h1 className='text-[27vw] leading-none font-["FounderGrotesk"] uppercase font-semibold pt-10 -mb-20'>
          We are ochi
        </h1>
        <h1 className='text-[27vw] leading-none font-["FounderGrotesk"] uppercase font-semibold pt-10 -mb-25'>
          We are ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
