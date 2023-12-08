import Image from "next/image";

import circle from "../public/circles.png"



const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-100 z-10">
      <Image
        src={circle}
        alt="circle"
        width={260}
        height={200} 
        className="h-full w-full"
        />
    </div>
  )
};

export default Circles;
