import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import home from "../public/hostel_management_home.png";
import home2 from "../public/hireHarbor.png";
import home3 from "../public/autocare.png"


const WorkSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[290px] sm:h-[340px] sm:w-[400px]"
    >
      <SwiperSlide>
        <div className="relative group">
          <div className="absolute group-hover:z-20 grid grid-cols-3 bg-black w-full h-full bg-opacity-0 group-hover:bg-opacity-40 space-x-3 top-0 left-0 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
            <div className="absolute group-hover:z-20 grid grid-cols-3 space-x-3 top-36 left-2 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <a href="https://amazing-lamington-f5fdd2.netlify.app/" className="btn btn-sm bg-accent text-white hover:bg-orange-400">Live Site</a>
              <a href="https://github.com/shohaib1996/Dorm-dine-hub-Client" className="btn btn-sm bg-accent text-white hover:bg-orange-400">Client Repo</a>
              <a href="https://github.com/shohaib1996/Dorm-dine-hub-server" className="btn btn-sm bg-accent text-white hover:bg-orange-400">Server Repo</a>
            </div>

          </div>
          <Image alt="img" src={home} width={600} height={400} className="scroll-container" />

        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
          <div className="absolute group-hover:z-20 grid grid-cols-3 bg-black w-full h-full bg-opacity-0 group-hover:bg-opacity-40 space-x-3 top-0 left-0 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
            <div className="absolute group-hover:z-20 grid grid-cols-3 space-x-3 top-36 left-2 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <a  href="https://monumental-medovik-3187d5.netlify.app/" className="btn btn-sm bg-accent text-white hover:bg-orange-400">Live Site</a>
              <a href="https://github.com/shohaib1996/hire-harbor-client-assignment-11" className="btn btn-sm bg-accent text-white hover:bg-orange-400">Client Repo</a>
              <a href="https://github.com/shohaib1996/hire-harbor-server-assignment-11" className="btn btn-sm bg-accent text-white hover:bg-orange-400">Server Repo</a>
            </div>

          </div>
          <Image alt="img" src={home2} width={600} height={400} className="scroll-container" />

        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
          <div className="absolute group-hover:z-20 grid grid-cols-3 bg-black w-full h-full bg-opacity-0 group-hover:bg-opacity-40 space-x-3 top-0 left-0 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
            <div className="absolute group-hover:z-20 grid grid-cols-3 space-x-3 top-36 left-2 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              <a href="https://marvelous-lamington-0ee9ae.netlify.app/" className="btn btn-sm bg-accent text-white hover:bg-orange-400">Live Site</a> 
              <a href="https://github.com/shohaib1996/automobile-project-client-assignment-10" className="btn btn-sm bg-accent text-white hover:bg-orange-400">Client Repo</a> 
              <a href="https://github.com/shohaib1996/automobile-project-servre-assignment-10" className="btn btn-sm bg-accent text-white hover:bg-orange-400">Server Repo</a> 
            </div>

          </div>
          <Image alt="img" src={home3} width={600} height={400} className="scroll-container" />

        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default WorkSlider;
