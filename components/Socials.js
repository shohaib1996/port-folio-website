
import Link from "next/link";
import { RiYoutubeLine, RiFacebookLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5">
      <Link href={'https://www.youtube.com/'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine className="text-xl" />
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
