

import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Work = () => {
  return (
    <>
      <div className="h-full bg-[#005c00]/60 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto overflow-y-auto xl:overflow-y-hidden md:h-[250px] lg:h-[500px]">
          <div className="flex flex-col xl:flex-row gap-x-6">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 mt-0 xl:mt-12">
              <motion.h2
                variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden"
                className="h2 mt-20 lg:mt-6">
                My Works
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0">As a MERN stack developer, I build some mern web application with the combination of frontend and backend. Hopefully you will checkout.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("down", 0.6)} initial="hidden" animate="show" exit="hidden"
              className="w-full xl:max-w-[65%] mt-0 xl:mt-12">
              <WorkSlider />
            </motion.div>
          </div>
          <footer className="footer footer-center p-2 bg-transparent text-white">
            <aside>
              <p className="text-white mt-0 lg:mt-20">Copyright © 2023 - All right reserved by <span >shohaib hossain</span></p>
            </aside>
          </footer>
        </div>
        <Bulb />
      </div>


    </>
  )
};

export default Work;

