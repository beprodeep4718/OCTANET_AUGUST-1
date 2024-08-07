

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className='text-black font-["NeueMontreal"] text-[4.5vw] leading-[3.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full mt-20 border-t-[1px] border-[#5a6533] pt-20 flex">
        <div className="w-1/2">
          <h1 className="text-black text-6xl">Our approach:</h1>
          <button className="mt-10 py-4 px-8 rounded-full bg-zinc-900 flex justify-center items-center gap-3">
            READ MORE
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")] bg-no-repeat bg-cover bg-center rounded-2xl'></div>
      </div>
    </div>
  );
};

export default About;
