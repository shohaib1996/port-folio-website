

import ParticlesContainer from './../components/ParticlesContainer';
import ProjectsBtn from './../components/ProjectsBtn';
import Avatar from './../components/Avatar';

import { motion } from "framer-motion"

import { fadeIn } from "../variants"


const Home = () => {
  return (
    <div className='bg-[#386641]/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-[#386641]/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'> Aspiring MERN Stack Developer | <br />Crafting Seamless <span className='text-accent'>Web Experiences</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8 text-sm'>Welcome to my digital abode! I am a passionate and diligent MERN Stack developer, eager to bring innovation and creativity to the world of web development. With a focus on building robust and user-friendly applications, I combine my skills in MongoDB, Express.js, React.js, and Node.js to create seamless and efficient frontend experiences. Explore my portfolio to witness my journey in turning ideas into interactive and visually appealing web applications. Let&apos;s build the future of the web together!
          </motion.p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='pb-28 hidden xl:flex'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        <ParticlesContainer/>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: "easeInOut"}}
          className='w-full h-full max-w-[550px] max-h-[450px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
};

export default Home;
