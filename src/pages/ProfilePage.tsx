import { motion as m, AnimatePresence } from "framer-motion";
import coverPhoto from "@/assets/images/profile-1.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Bio from "@/components/Profile/Bio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SuggestionCarousel from "@/components/Profile/SuggestionCarousel";
import { Bird, MessageSquareMore, MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import member17 from "@/assets/images/member/17.jpg";
import ContentBox from "@/components/Profile/ContentBox";
import ProfileCard from "@/components/SearchPage/ProfileCard";
import { LayoutGridDemo } from "@/components/Photos/photos-grid";
import Media from "@/components/Profile/media";
import { useEffect, useRef } from "react";

function ProfilePage() {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <AnimatePresence>
      <m.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className=" max-w-full pb-8  md:max-w-6xl  h-[calc(100vh-20)] mx-auto "
      >
        <div className="relative  w-full px-2  space-y-4">
          <div
            style={{ backgroundImage: `url(${coverPhoto})` }}
            className="w-full bg-cover flex items-end p-4 bg-center h-72"
          >
            <div className="flex w-full justify-around items-end">
              <div className="h-40 w-40 rounded-full bg-white p-1">
                <img
                  className="h-full w-full rounded-full overflow-hidden bg-cover bg-center"
                  src={member17}
                  alt="profile"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Alex Jhon</h1>
                <p className="text-white">Acttive 2 minutes Ago</p>
              </div>
              <Button>
                <Plus className="mr-2" /> Add To Friend
              </Button>
              <Button>
                <MessageSquareMore className="mr-2" /> Direct Message
              </Button>
              <Button>
                <Bird className="mr-2" /> Wink
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-md">People You May Know</CardTitle>
            </CardHeader>
            <CardContent>
              <SuggestionCarousel />
            </CardContent>
          </Card>
          <div className="w-full flex justify-end">
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="p-4 py-6 w-full">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger className="hidden md:block" value="friends">
                  Friends
                </TabsTrigger>
                <TabsTrigger className="hidden md:block" value="groups">
                  Groups
                </TabsTrigger>
                <TabsTrigger className="hidden md:block" value="photos">
                  Photos
                </TabsTrigger>
                <TabsTrigger className="hidden md:block" value="media">
                  Media
                </TabsTrigger>
                <TabsTrigger className="md:hidden block" value="more">
                  <MoreHorizontal />
                </TabsTrigger>
              </TabsList>
              <TabsContent value="activity">
                <ContentBox>
                  <div className="bg-gray-200 w-full h-full">Activities</div>
                </ContentBox>
              </TabsContent>
              <TabsContent value="profile">
                <ContentBox>
                  <Bio />
                </ContentBox>
              </TabsContent>
              <TabsContent value="friends">
                <ContentBox>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {Array.from({ length: 10 }).map((_, idx) => (
                      <ProfileCard key={idx} index={idx} />
                    ))}
                  </div>
                </ContentBox>
              </TabsContent>
              <TabsContent value="groups">
                <ContentBox>
                  <div className="bg-gray-200 w-full h-full">groups</div>
                </ContentBox>
              </TabsContent>
              <TabsContent value="photos">
                <ContentBox>
                  <LayoutGridDemo />
                </ContentBox>
              </TabsContent>
              <TabsContent value="media">
                <ContentBox>
                  <Media />
                </ContentBox>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </m.section>
    </AnimatePresence>
  );
}

export default ProfilePage;
