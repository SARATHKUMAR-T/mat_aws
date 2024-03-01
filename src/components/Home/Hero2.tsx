import hero12 from "@/assets/images/hero12.png";
import emoji from "@/assets/images/love.svg";
import { TypewriterEffect } from "../ui/type-writter";
import { motion as m } from "framer-motion";
import { Card } from "../ui/card";
import closeup from "@/assets/images/closeup.png";
import men21 from "@/assets/images/men21.jpg";

function Hero2() {
  const words = [
    {
      text: "Find",
      className: " text-center text-3xl md:text-7xl pt-12  text-green-600",
    },
    {
      text: "Your",
      className: " text-center text-3xl md:text-7xl pt-12  text-green-600",
    },
  ];
  return (
    <section className="relative min-h-screen bg-rose-100 ">
      {/* <h1 className="text-center text-3xl md:text-7xl pt-12  text-green-600">
        Find Your
      </h1> */}
      <TypewriterEffect
        className="text-center text-3xl md:text-7xl pt-12  text-green-600"
        words={words}
      />
      <div className="z-10 mt-7 relative flex items-center justify-center">
        {/* emoji */}
        <m.img
          src={emoji}
          alt="emoji"
          className="absolute animate-pulse top-10 size-14 sm:size-28 md:size-44 left-2 md:left-20 lg:left-52  rotate-12"
        />
        {/* left card */}

        <Card
          className="
        bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  border border-gray-100
        hidden sm:flex flex-col items-center gap-3 absolute left-44 top-[35%]   px-6 py-3 border-none "
        >
          <div className="size-16 bg-pink-600 flex items-center justify-center rounded-full">
            <img
              alt="profile"
              className="size-14 overflow-hidden rounded-full"
              src={closeup}
            />
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground text-center font-semibold text-sm  w-32  ">
              Australia
            </div>
            <div className=" flex items-center justify-center text-center text-lg font-semibold   w-32  rounded-lg ">
              <p className="my-auto">
                Jhon
                <span className="text-green-600 ml-2">Doe</span>
              </p>
            </div>
            <div className=" w-32  rounded-lg ">
              <div className="p-1 bg-primary text-sm text-center rounded-lg">
                Say Hello!
              </div>
            </div>
          </div>
        </Card>
        {/* right card */}
        <Card
          className="
        bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
        hidden sm:flex items-center gap-3 absolute top-40 right-2 lg:right-[10%] px-6 py-3 border-none "
        >
          <div className="size-16 bg-yellow-500 flex items-center justify-center rounded-full">
            <img
              alt="profile"
              className="size-14 overflow-hidden rounded-full"
              src={men21}
            />
          </div>
          <div className="space-y-1">
            <div className="h-4 w-32 animate-pulse rounded-lg bg-gray-600 bg-opacity-30" />
            <div className="h-4 w-32 animate-pulse rounded-lg bg-gray-600 bg-opacity-30" />
            <div className="h-4 w-32 animate-pulse rounded-lg bg-gray-600 bg-opacity-30" />
          </div>
        </Card>

        <div className="absolute right-24 size-9 bg-yellow-500 rounded-full" />
        <div className="absolute top-56 left-12 size-9 bg-green-600 rounded-full" />
        <div className="absolute right-56 top-24 size-2 bg-green-600 rounded-full" />
        <div className="absolute left-56 top-2 size-2 bg-rose-400 rounded-full" />
        <h1 className=" -z-10 -top-16 absolute text-center text-5xl md:text-8xl font-semibold mt-6 tracking-wide">
          True soul{" "}
        </h1>
        <img
          className="h-[80vh] sm:h-[90vh] md:h-[90vh] z-10 "
          src={hero12}
          alt="hero1"
        />
        <div className="absolute size-60 sm:size-80  md:size-96 rounded-full bg-yellow-500 -top-4 -z-20 " />
      </div>
    </section>
  );
}

export default Hero2;
