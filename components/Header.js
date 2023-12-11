

import Link from "next/link";
import Socials from "../components/Socials"
import Image from "next/image";
import logo from "../public/logo.png"

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-12 xl:px-0 xl:h-[80px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-5">
          <Link href={'/'}>
            <Image
              src={logo}
              alt="log"
              width={250}
              height={55}
              priority={true}
            />
          </Link>
          <Socials/>
        </div>
      </div>

    </header>
  )
};

export default Header;
