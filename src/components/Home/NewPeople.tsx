import SuggestionCarousel from "../Profile/SuggestionCarousel";
import { Button } from "../ui/button";
import { Clapperboard, Handshake } from "lucide-react";

function NewPeople() {
  return (
    <section className="w-full">
      <div className="max-w-6xl py-16 text-center mx-auto">
        <h1 className="text-pink-700 text-3xl font-bold">
          Meet New People Today !
        </h1>
        <h2 className="text-gray-800 text-5xl font-bold mt-2">
          New Peoples In London
        </h2>
        <div className="flex max-w-6xl mx-auto flex-col sm:flex-row my-8 gap-4">
          <SuggestionCarousel />
        </div>
        <div className="flex px-4 flex-col sm:flex-row justify-center mt-4  gap-2">
          <Button>
            <Handshake className="mr-2 h-4 w-4" /> Join Us For Free
          </Button>
          <Button>
            <Clapperboard className="mr-2 h-4 w-4" /> Our Tv Commercial
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NewPeople;
