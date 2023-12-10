import Lottie from "react-lottie";
import animation from "../../public/Animation - 1701228084328.json"

const Testimonials = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="mt-36 ">
      <p className="text-3xl font-bold text-center text-white my-3">Not Yet</p>
      <Lottie
        options={defaultOptions}
        height={300}
        width={350}


      />

    </div>
  )
};

export default Testimonials;
