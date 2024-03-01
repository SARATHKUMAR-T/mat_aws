import ContentBox from "@/components/Profile/ContentBox";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Heart, MessageSquareMore } from "lucide-react";
import blog3 from "@/assets/images/blog/02.jpg";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useEffect, useRef } from "react";

function SingleBlog() {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section className="max-w-6xl  pb-14 lg:max-w-8xl mx-auto">
      <Link
        to="/"
        className={buttonVariants({
          variant: "secondary",
          className: "mt-4",
        })}
      >
        <ArrowLeft className="mr-3" />
        Back To Home
      </Link>
      <ContentBox>
        <div className="space-y-4">
          <img
            src={blog3}
            className="h-64 bg-cover bg-center w-full hover:scale-[102%] overflow-hidden duration-300"
            alt="blog-image"
          />
          <p>By Admin March 24,2021</p>
          <h1 className="font-bold text-3xl text-primary">
            Finded My Soulmate In Christians Online
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            alias odit libero! Consectetur consequatur assumenda necessitatibus
            aspernatur reprehenderit nihil voluptatem iusto hic amet nobis et
            ratione architecto asperiores, illum reiciendis.
          </p>
          <div className="flex w-full justify-end mt-4">
            <div className="flex gap-4">
              <Button
                variant="ghost"
                className="hover:animate-bounce hover:text-rose-700"
                size="icon"
              >
                <Heart />
              </Button>
              <Drawer>
                <DrawerTrigger>
                  <Button variant="ghost" className="" size="icon">
                    <MessageSquareMore />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Comments</DrawerTitle>
                  </DrawerHeader>
                  <div>he said something</div>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </ContentBox>
    </section>
  );
}

export default SingleBlog;
