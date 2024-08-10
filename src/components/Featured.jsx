function Featured() {
  return (
    <div className="w-full py-20">
      <div className="px-8 md:px-16 text-4xl md:text-6xl border-b-2 pb-10 md:pb-20 border-zinc-800">
        Featured projects
      </div>
      <div className="px-10 md:px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-6 md:gap-10 mt-10">
          <div className="card-cont w-full md:w-1/2 h-[50vh] md:h-[75vh] relative">
            <h1 className="absolute leading-none tracking-tight z-10 left-1/2 top-1/2 text-4xl md:text-6xl -translate-x-1/2 -translate-y-1/2 text-[#CDEA68]">
              FYDE
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE Project"
              />
            </div>
          </div>
          <div className="card-cont w-full md:w-1/2 h-[50vh] md:h-[75vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Vise Project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
