function Featured() {
  return (
    <div className="w-full py-20">
      <div className="px-16 text-6xl border-b-2 pb-20 border-zinc-800">
        Featured projects
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="card-cont w-1/2 h-[75vh] relative">
          <h1 className="absolute leading-none tracking-tight z-10 left-full top-1/2 text-6xl -translate-x-1/2 -translate-y-1/2 text-[#CDEA68]">FYDE</h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="h-full w-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div>
          <div className="card-cont w-1/2 h-[75vh]">
            <div className="card w-full h-full rounded-xl">
            <img className="h-full w-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
