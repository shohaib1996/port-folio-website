// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {

  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiJsonwebtokens,
  SiFirebase,
  SiTailwindcss

} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles"
import { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development (MERN)',
        skills: [
          { icon: <FaHtml5 key={1} />, name: "HTML" },
          { icon: <FaCss3 key={2} />, name: "CSS" },
          { icon: <FaJs key={3} />, name: "JavaScript" },
          { icon: <FaReact key={4} />, name: "React" },
          { icon: <SiFramer key={5} />, name: "Framer Motion" },
          { icon: <FaNodeJs key={6} />, name: "Node.js" },
          { icon: <SiJsonwebtokens key={7} />, name: "JWT" },
          { icon: <SiFirebase key={8} />, name: "Firebase" },
          { icon: <SiMongodb key={9} />, name: "MongoDB" },
          { icon: <SiMongoose key={10} />, name: "Mongoose" },
          { icon: <SiTailwindcss key={11} />, name: "Tailwind CSS" },
          { icon: <SiExpress key={12} />, name: "Express" }
        ]

      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Not Yet',
        stage: 'none',
      },

    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Not Yet',
        stage: 'None',
      }
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'BSc - Geography and Environment(Jagannath University)',
        stage: '2020',
      },
      {
        title: 'Web Development - Programming Hero(Boot Camp)',
        stage: '2023',
      }
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className="h-full bg-[#005c00]/50 py-20 xl:py-28 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[150px] h-[350px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto  flex flex-col items-center xl:flex-row mt-12 overflow-y-auto xl:overflow-y-hidden h-[500px] md:h-[170px] lg:h-[350px]">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2">
            I am an ambitious and <span className="text-accent">passionate</span> MERN Stack Developer
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-4 xl:mb-10 px-2 xl:px-0">
            As an ambitious and passionate MERN Stack Developer, I am dedicated to mastering MongoDB, Express.js, React, and Node.js. With a focus on full-stack web development, I thrive on creating dynamic and scalable solutions. My commitment reflects a genuine love for crafting efficient web applications and a drive for continuous improvement.
          </motion.p>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[350px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <motion.div
                  variants={fadeIn('down', 0.4)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}

                </motion.div>
              )
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start" >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <motion.div
                  variants={fadeIn('up', 0.6)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center">
                  <div className="font-light mb-2 md:mb-0 text-slate-400">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4 flex-wrap">
                    {item.skills?.map((skill, iconIndex) => {
                      return (
                        <div className="flex flex-col items-center justify-center gap-3" key={iconIndex}>
                          <p className="text-2xl text-white pt-1">{skill.icon}</p>
                          <p className="text-[12px] italic font-bold text-white">{skill.name}</p>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className={`${index === 0 ? "" : 'hidden'}`}>
            <p className="flex items-center">Frontend: <progress className="progress progress-primary w-56 ml-2" value="70" max="100"></progress> <span className="text-white"> (70%)</span> </p>
            <p className="flex items-center mt-5">Backend: <progress className="progress progress-primary w-56 ml-2" value="60" max="100"></progress> <span className="text-white"> (60%)</span> </p>
          </motion.div>
        </div>
      </div>
      <footer className="footer footer-center p-4 mt-0 lg:mt-12  bg-transparent text-white">
        <aside>
          <p className="text-white">Copyright © 2023 - All right reserved by <span >shohaib hossain</span></p>
        </aside>
      </footer>

    </div>
  );
};

export default About;
