import React from "react";

function Marquee() {
  return (
    <div className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex gap-10 whitespace-nowrap animate-marquee">
        <h1 className='text-[20vw] md:text-[27vw] leading-none font-["FounderGrotesk"] uppercase font-semibold pt-10 '>
          We are ochi
        </h1>
        <h1 className='text-[20vw] md:text-[27vw] leading-none font-["FounderGrotesk"] uppercase font-semibold pt-10 '>
          We are ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
