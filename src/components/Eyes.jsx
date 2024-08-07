import { useEffect, useState } from "react";

function Eyes() {
    const [rotate, setAngle] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;

            let deltaX = x - window.innerWidth / 2;
            let deltaY = y - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            console.log(angle);

            setAngle(angle);
        })
    })
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-no-repeat bg-cover bg-center'>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-5">
          <div className="w-[15vw] h-[15vw] bg-zinc-200 rounded-full flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate - 180}deg)`}} className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-200 rounded-full flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate - 180}deg)`}} className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Eyes;
