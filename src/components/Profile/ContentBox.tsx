import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowUpRightFromSquareIcon, ChevronsRight } from "lucide-react";
import { BorderButton } from "../MovingBorder";
import FindPartnerForm from "../Home/FindPartnerForm";
import { Link } from "react-router-dom";

function ContentBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row mt-6 w-full gap-4">
      {/* left box */}
      <div className="flex-[2] space-y-4">{children}</div>
      <div className="flex-1 space-y-4">
        {/* eStamp */}
        <Card>
          <CardHeader>
            <CardTitle>Running Out Of eStamps?</CardTitle>
          </CardHeader>
          <CardContent>
            <BorderButton
              borderRadius="12px"
              className="bg-primary border-neutral-200  border-2  w-full"
            >
              Buy Now <ChevronsRight className="ml-2" />
            </BorderButton>
            <Link to="/pricing"></Link>
          </CardContent>
        </Card>
        {/* vip */}
        <Card className="bg-slate-300  backdrop-blur-sm bg-opacity-40">
          <CardHeader>
            <CardTitle className="bg-slate-700 text-center p-3 text-white rounded-lg">
              VIP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul style={{ listStyle: "disc" }} className="space-y-3 ml-8">
              <li>Requires eStamps to contact members</li>
              <li>Standout in search results</li>
              <li>You'll feature on our homepage</li>
              <li>Make private notes next to your favourites</li>
              <li>See who's viewed your profile!</li>
              <li>Know when contacts have read your email</li>
              <li>Block pesky members</li>
              <li>And best of all...Your eStamps wont expire!</li>
            </ul>
          </CardContent>
          <CardFooter className="w-full">
            <BorderButton
              borderRadius="12px"
              className="bg-primary border-neutral-200 border-4 w-full"
            >
              Upgrade To VIP <ArrowUpRightFromSquareIcon className="ml-2" />
            </BorderButton>
          </CardFooter>
        </Card>

        {/* search form */}

        <FindPartnerForm />
      </div>
    </div>
  );
}

export default ContentBox;
