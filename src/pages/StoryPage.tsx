import StoryCard from "@/components/Story/StoryCard";
import { motion as m } from "framer-motion";
import { useEffect, useRef } from "react";

function StoryPage() {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" max-w-full text-center py-20  bg-rose-200  pt-4  px-4 md:px-0 h-[calc(100vh-20)] mx-auto space-y-4"
      >
        <h2 className="text-2xl mt-9 font-semibold">
          Love In Faith Success Stories
        </h2>
        <h1 className="text-4xl font-bold tracking-wider">
          Sweet Stories From Our Lovers
        </h1>
        <div className="max-w-full md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 ">
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
      </m.section>
    </>
  );
}

export default StoryPage;
