import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Pricing() {
  return (
    <section className="min-h-screen  py-12 px-6">
      <h1 className="text-center text-4xl font-bold">
        Increase Your Chances Of Finding Someone Special
      </h1>
      <p className="text-center mt-4">
        An eStamp gives you unlimited contact with another member for 30
        days,allowing you to get to know them via messages or instant chat.
      </p>
      {/* cards container */}

      <div className="flex items-center justify-center flex-wrap max-w-6xl mx-auto py-12 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Card key={idx} className="w-64 bg-blue-600 bg-opacity-30 ">
            <CardHeader className=" rounded-lg">
              <div className="flex justify-between">
                <CardTitle>Bronze</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-6 w-6" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to library</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center justify-center flex-col gap-4">
                <div className="flex items-end gap-1 justify-center">
                  <h3 className="text-3xl font-bold">2</h3>
                  <p>eStamps</p>
                </div>
                <Separator />
                <div className="flex gap-1 items-end justify-center">
                  <h3 className="text-3xl font-bold">1 Month</h3>
                  <p>validity</p>
                </div>
                <Separator />
                <div className="flex items-end justify-center">
                  <h3 className="text-3xl font-bold">$24.95</h3>
                </div>
                <Separator />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Purchase</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
