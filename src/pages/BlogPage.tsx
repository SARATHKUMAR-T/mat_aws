import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import blog1 from "@/assets/images/blog/01.jpg";
import { ArrowRight, Heart } from "lucide-react";
import { motion as m, AnimatePresence } from "framer-motion";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function BlogPage() {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="blogs about couples" />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <AnimatePresence>
        <m.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className=" max-w-full pb-8 pt-4 md:max-w-6xl px-4 md:px-0 h-[calc(100vh-20)] mx-auto space-y-4"
        >
          <div className="flex mt-12 gap-4 ">
            <div className="flex-1 space-y-4">
              <Input
                className="bg-gray-200"
                type="search"
                placeholder="Search..."
              />
              <Card className="bg-gray-200">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="flex text-left flex-col ">
                  <Button className="my-3  justify-start" variant="ghost">
                    Age between 20-30
                  </Button>
                  <Separator className="bg-white" />
                  <Button className=" my-3  justify-start" variant="ghost">
                    Age between 20-30
                  </Button>
                  <Separator className="bg-white" />
                  <Button className="my-3 justify-start" variant="ghost">
                    Age between 20-30
                  </Button>
                  <Separator className="bg-white" />
                  <Button
                    className="
              my-3 
              justify-start"
                    variant="ghost"
                  >
                    Age between 20-30
                  </Button>
                </CardContent>
              </Card>

              {/* top posts */}
              <Card className="bg-gray-200">
                <CardHeader>
                  <CardTitle>Top Posts</CardTitle>
                  <CardContent className="pt-2 space-y-6">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold">{idx + 1}</h1>
                        <div className="space-y-1">
                          <p>Souls with pure Heart found</p>
                          <p className="text-muted-foreground text-sm capitalize">
                            Canberra-27/02/2024
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </CardHeader>
              </Card>
            </div>

            {/* main blog */}
            <div className="flex-[2]  grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              {Array.from({ length: 8 }).map((_, idx) => (
                <Card className="self-start group cursor-pointer" key={idx}>
                  <CardHeader>
                    <img
                      src={blog1}
                      className="h-48 object-cover object-center rounded-lg group-hover:scale-105 duration-300 w-full aspect-square"
                      alt="profile"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Canberra-27/02/2024</CardDescription>
                    <h3 className="text-xl font-bold">
                      Find your soul with christians online
                    </h3>
                    <p>
                      i am dravis i found my perfect soul with the help of
                      christians online.
                    </p>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <Link
                      className={buttonVariants({
                        variant: "default",
                      })}
                      to={`/blog/${idx}`}
                    >
                      Read More
                      <ArrowRight className="ml-2" />
                    </Link>
                    <Button
                      variant="ghost"
                      className="hover:animate-bounce hover:text-rose-700"
                      size="icon"
                    >
                      <Heart />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              {/* pagination */}
              <div className="col-span-2">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink isActive={true} href="#">
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">8</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </m.section>
      </AnimatePresence>
    </>
  );
}

export default BlogPage;
