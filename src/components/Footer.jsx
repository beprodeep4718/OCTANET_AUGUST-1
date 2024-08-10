const Footer = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center p-10 md:p-20">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
        <h1 className="text-[16vw] md:text-[9vw] leading-none uppercase font-bold font-[FounderGrotesk] -mb-5 md:-mb-10">
          eye-
        </h1>
        <h1 className="text-[16vw] md:text-[9vw] leading-none uppercase font-bold font-[FounderGrotesk] -mb-5 md:-mb-10">
          opening
        </h1>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
        <h1 className="text-[16vw] md:text-[9vw] leading-none uppercase font-bold font-[FounderGrotesk]">
          presentation
        </h1>
        <div className="dets font-[NeueMontreal] mt-5 md:mt-10">
          <a href="#" className="block text-lg md:text-xl">
            Facebook
          </a>
          <a href="#" className="block text-lg md:text-xl">
            Twitter
          </a>
          <a href="#" className="block text-lg md:text-xl">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
