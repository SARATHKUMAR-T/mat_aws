import banner from "@/assets/images/banner/01.png";
// import banner1 from "@/assets/images/banner/banner-shapes/01.png";
// import banner2 from "@/assets/images/banner/banner-shapes/02.png";
// import banner3 from "@/assets/images/banner/banner-shapes/03.png";
// import banner4 from "@/assets/images/banner/banner-shapes/04.png";
// import banner5 from "@/assets/images/banner/banner-shapes/05.png";
// import banner6 from "@/assets/images/banner/banner-shapes/06.png";
// import banner7 from "@/assets/images/banner/banner-shapes/07.png";
// import banner8 from "@/assets/images/banner/banner-shapes/08.png";
// import { motion as m } from "framer-motion";
import FindPartnerForm from "./FindPartnerForm";
// import { Variants } from "framer-motion";

const Hero = () => {
  // const sliderVariants: Variants = {
  //   initial: {
  //     y: 0,
  //   },
  //   animate: {
  //     y: 20,
  //     transition: {
  //       delay: 1,
  //       repeat: Infinity,
  //       duration: 2,
  //       repeatType: "reverse",
  //     },
  //   },
  // };
  return (
    <section className="min-h-screen h-full  bg-rose-100 w-full flex items-end md:flex-row flex-col  gap-y-28 ">
      {/* form container */}
      <div className="h-full  w-full   flex-1 flex items-start justify-start  ">
        <div className="w-[90%] py-0 sm:py-16 sm:w-[70%] mx-auto h-full">
          <FindPartnerForm />
        </div>
      </div>
      {/* image container */}
      <div className="flex-1 flex items-end pt-24  h-full w-full ">
        {/* <div className="h-full  z-10 relative flex items-end">
          <m.img
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            src={banner1}
            alt="shape"
            className="absolute animate-pulse z-0 top-[30%]"
          />
          <m.img
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            src={banner2}
            alt="shape"
            className="absolute  top-[10%] right-16 z-0"
          />
          <m.img
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            src={banner3}
            alt="shape"
            className="absolute top-[10%] right-[30%] z-0"
          />
          <m.img
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            src={banner4}
            alt="shape"
            className="absolute  -top-10 right-[50%] z-0"
          />
          <m.img
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            src={banner5}
            alt="shape"
            className="absolute  top-[20%] right-[35%] z-0"
          />
          <m.img
            src={banner6}
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            alt="shape"
            className="absolute  top-[4%] left-[15%] z-0"
          />
          <m.img
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            src={banner7}
            alt="shape"
            className="absolute  top-[40%] left-10 z-0"
          />
          <m.img
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            src={banner8}
            alt="shape"
            className="absolute top-[50%] left-0 z-0"
          />
        </div> */}
        <div className="flex items-end h-[100%]">
          <img src={banner} alt="img" className="z-20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
