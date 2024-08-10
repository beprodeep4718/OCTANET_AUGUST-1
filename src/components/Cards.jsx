const Cards = () => {
  return (
    <div className="w-full h-screen px-6 md:px-10 flex flex-col md:flex-row justify-center items-center gap-5">
      <div className="cont w-full md:w-1/2">
        <div className="w-full relative bg-[#004D43] h-[50vh] md:h-[60vh] rounded-xl flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Logo 1"
          />
          <button className="absolute bottom-5 left-5 border-2 border-[#CDEA68] rounded-full text-[#CDEA68] px-2 py-1 text-sm md:text-base">
            ©2019–2022
          </button>
        </div>
      </div>
      <div className="cont w-full md:w-1/2 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 relative bg-[#212121] h-[50vh] md:h-[60vh] rounded-xl flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Logo 2"
          />
          <button className="absolute bottom-5 left-5 border-2 border-[#CDEA68] rounded-full text-[#CDEA68] px-2 py-1 text-sm md:text-base">
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className="w-full md:w-1/2 relative bg-[#212121] h-[50vh] md:h-[60vh] rounded-xl flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Logo 3"
          />
          <button className="absolute bottom-5 left-5 border-2 border-[#CDEA68] rounded-full text-[#CDEA68] px-2 py-1 text-sm md:text-base">
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
