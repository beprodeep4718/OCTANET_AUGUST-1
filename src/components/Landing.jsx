import { FiArrowUpRight } from "react-icons/fi";

function Landing() {
  return (
    <div className="h-screen w-full pt-1">
      <div className="textstr mt-32 px-20 relative z-10">
        {["we create", "eye-opning", "presentations"].map((item, index) => (
          <div key={index} className="mask font-['FounderGrotesk']">
            <div className="w-fit flex items-center gap-4">
              {index === 1 && (
                <div className="w-[8rem] h-[5.2rem] bg-red-500 relative z-1 top-2 align-top rounded-lg overflow-hidden">
                  <img
                    className="h-full w-full object-center object-cover
                    "
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt=""
                  />
                </div>
              )}
              <h1 className="uppercase text-9xl leading-[5.9rem] antialiased flex items-center h-full tracking-wide">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="leading-none tracking-tight font-light text-xl"
          >
            {item}
          </p>
        ))}
        <div className="flex gap-2">
          <div className="uppercase px-4 py-2 border border-zinc-500 rounded-full font-light text-base">
            start the project
          </div>
          <div className="w-10 h-10 border border-zinc-600 rounded-full flex justify-center items-center">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
