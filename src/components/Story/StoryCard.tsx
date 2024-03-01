import { ArrowUpRightFromSquare } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import blog1 from "@/assets/images/blog/01.jpg";

function StoryCard() {
  return (
    <Card className="duration-300 cursor-pointer group transition-all hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex-1 p-4">
      <CardContent className="p-0 space-y-3">
        <img
          src={blog1}
          alt="blog-1"
          className="h-80 aspect-video group-hover:scale-105 duration-300 object-cover object-center rounded-lg"
        />
        <h1 className="text-2xl font-bold">Finded A Pure Soul</h1>
        <p>
          Seamlesly evolve unique web-readiness with Collabors atively fabricate
          best of breed and apcations through
        </p>
      </CardContent>
      <CardFooter className="pt-6 justify-center">
        <Button className="px-12">
          Read More
          <ArrowUpRightFromSquare className="ml-3" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default StoryCard;
