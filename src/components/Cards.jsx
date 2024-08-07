const Cards = () => {
  return (
    <div className="w-full h-screen px-10 flex justify-center items-center gap-5">
      <div className="cont w-1/2">
        <div className="w-full relative bg-[#004D43] h-[60vh] rounded-xl flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-5 border-2 border-[#CDEA68] rounded-full text-[#CDEA68] px-2 py-1">©2019–2022</button>
        </div>
      </div>
      <div className="cont w-1/2 flex gap-5">
        <div className="w-1/2 relative bg-[#212121] h-[60vh] rounded-xl flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute bottom-5 left-5 border-2 rounded-full px-2 py-1">Rating 5.0 on Clutch</button>
        </div>
        <div className="w-1/2 relative bg-[#212121] h-[60vh] rounded-xl flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            height={104}
            width={102}
            alt=""
          />
          <button className="absolute bottom-5 left-5 border-2 rounded-full px-2 py-1">Business Bootcamp Alumni</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
