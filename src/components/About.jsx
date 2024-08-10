const About = () => {
  return (
    <div className="w-full p-10 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className='text-black font-["NeueMontreal"] text-2xl md:text-[4.5vw] leading-tight md:leading-[3.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full mt-10 md:mt-20 border-t-[1px] border-[#5a6533] pt-10 md:pt-20 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-black text-4xl md:text-6xl">Our approach:</h1>
          <button className="mt-6 md:mt-10 py-3 px-6 md:py-4 md:px-8 rounded-full bg-zinc-900 flex justify-center items-center gap-3 text-white">
            READ MORE
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </button>
        </div>
        <div className='md:w-1/2 h-[40vh] md:h-[70vh] bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")] bg-no-repeat bg-cover bg-center rounded-2xl'></div>
      </div>
    </div>
  );
};

export default About;
