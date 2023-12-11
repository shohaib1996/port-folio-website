
import Link from "next/link";
import { RiYoutubeLine, RiFacebookLine, RiLinkedinLine, RiGithubLine, RiArrowDownLine, RiArrowDropDownLine } from "react-icons/ri"

const Socials = () => {

  return (
    <div className="flex items-center gap-x-3 lg:gap-x-5">
      <a href="/resume.pdf" download='resume.pdf' className='btn btn-sm border-none bg-accent text-white font-bold text-lg'><RiArrowDropDownLine />Resume</a>
      <Link href={"/work"}>
        <button className='btn btn-sm xl:hidden  bg-accent border-none text-white text-md'>Projects</button>
      </Link>

      <Link href={'https://www.facebook.com/ananta.asim.5/'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine className="text-xl" />
      </Link>
      <Link href={'https://www.linkedin.com/in/shohaib-hossain-0792041ba/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine className="text-xl" />
      </Link>
      <Link href={'https://github.com/shohaib1996'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine className="text-xl" />
      </Link>
    </div>
  )
};

export default Socials;
