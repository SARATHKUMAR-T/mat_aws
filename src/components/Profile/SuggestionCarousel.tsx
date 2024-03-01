import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import person8 from "@/assets/images/member/08.jpg";

const SuggestionCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-6"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-1/3 md:basis-1/5 ">
            <div className="p-1">
              <Card className="h-72 p-0">
                <CardHeader className="p-0 h-[70%] overflow-hidden">
                  <img
                    alt="person-8"
                    className="aspect-square h-[100%] bg-cover overflow-hidden rounded-lg bg-center"
                    src={person8}
                  />
                </CardHeader>
                <CardContent className="p-1">
                  <CardTitle className="p-0 px-3">Alex costa</CardTitle>
                </CardContent>
                <CardFooter className="mt-1 px-3">
                  <Button size="sm" className="w-full h-8 ">
                    Add To Friend
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 sm:-left-2" />
      <CarouselNext className="right-2 sm:-right-2" />
    </Carousel>
  );
};

export default SuggestionCarousel;
