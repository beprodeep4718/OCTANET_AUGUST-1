const Footer = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-20">
      <div className="w-1/2 h-full">
        <h1 className="text-[9vw] leading-none uppercase font-bold font-[FounderGrotesk] -mb-10">
          eye-
        </h1>
        <h1 className="text-[9vw] leading-none uppercase font-bold font-[FounderGrotesk] -mb-10">
          opening
        </h1>
      </div>
      <div className="w-1/2 h-full">
        <h1 className="text-[9vw] leading-none uppercase font-bold font-[FounderGrotesk]">
          presentation
        </h1>
        <div className="dets font-[NeueMontreal]">
          <a href="" className="block">Facebook</a>
          <a href="" className="block">Twitter</a>
          <a href="" className="block">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
