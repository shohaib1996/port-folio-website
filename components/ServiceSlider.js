// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'I will support you to established your brand by building website from scratch',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'I will design your website by figma or canva as your requirement',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'By MERN technology i will build your site end to end with backend support',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'I can do some SEO for google ranking to reach out more people and grow your site',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },

    }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]"
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-5 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                <div className="text-accent text-3xl mb-4">{item.icon}</div>
                <div className="mb-6">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <div className="max-w-[350px] leading-normal">{item.description}</div>
                </div>
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default ServiceSlider;
