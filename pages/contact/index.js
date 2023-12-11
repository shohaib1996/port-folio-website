import Circles from "../../components/Circles";
import { FaSpinner } from "react-icons/fa";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_nbmux6f', 'template_t3455i9', form.current, 'N7sCXhxC1NSQ36mKf')
      .then((result) => {
        console.log(result.text);
        if (result.text) {
          toast.success("Your Message Has been sent", { duration: 5000 });
          form.current.reset();
        }
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="h-full bg-[#005c00]/60">
      <div className="container mx-auto py-28 text-center xl:text-left flex items-center justify-center h-full overflow-y-auto xl:overflow-y-hidden md:h-[350px] lg:h-[500px]">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="text-center h2 mt-10 md:mt-24 lg:mt-10  lg:mb-10 ">
            Let&apos;s <span className="text-accent">connect</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            id="contactForm" ref={form} onSubmit={sendEmail} className="flex-1 flex flex-col gap-5 w-full mx-auto">
            <div className="flex gap-x-3 w-full">
              <input name="user_name" type="text" placeholder="name" className="bg-transparent border-2 rounded-lg w-1/2" required />
              <input name="user_email" type="email" placeholder="Email" className="bg-transparent border-2 rounded-lg w-1/2" required />
            </div>
            <textarea name="message" className="bg-transparent border-2 rounded-lg" placeholder="message"></textarea>
            <div className="text-center">
              {loading ? (
                <div className="w-full bg-accent text-white px-3 py-2 hover:bg-orange-500 font-xl rounded-md sm:mb-0"><span className="loading loading-spinner loading-md"></span></div>
              ) : (
                <input
                  value="Send Message"
                  type="submit"
                  className="w-full bg-accent text-white px-3 py-2 hover:bg-orange-500 font-xl rounded-md sm:mb-0"
                />
              )}
            </div>
          </motion.form>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-transparent text-white absolute top-[75%]">
        <aside>
          <p className="text-white mt-0 lg:mt-20">Copyright © 2023 - All right reserved by <span >shohaib hossain</span></p>
        </aside>
      </footer>
    </div>
  );
};

export default Contact;
