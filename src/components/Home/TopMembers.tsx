import ProfileCard from "../SearchPage/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const TopMembers = () => {
  return (
    <section className=" max-w-full text-center py-20 mt-20   pt-4  px-4 md:px-0 min-h-[calc(100vh-20)] mx-auto space-y-4">
      <h2 className="text-2xl mt-9 font-semibold">Top Members</h2>
      <h1 className="text-4xl font-bold tracking-wider">Christians Online</h1>
      <div className="max-w-full md:max-w-6xl mx-auto  pt-10 ">
        <Tabs defaultValue="all">
          <TabsList className="flex bg-slate-200  flex-col sm:flex-row sm:p-4 sm:py-6 p-0  ">
            <TabsTrigger value="all">Show All</TabsTrigger>
            <TabsTrigger value="boy">New Boy Member</TabsTrigger>
            <TabsTrigger value="girl">New Girl Member</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className=" w-full mt-12 h-full grid grid-cols-1 sm:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, idx) => (
                <ProfileCard key={idx} index={idx} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="boy">
            <div className=" w-full mt-12 h-full grid grid-cols-1 sm:grid-cols-4 gap-3">
              {Array.from({ length: 15 }).map((_, idx) => (
                <ProfileCard key={idx} index={idx} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="girl">
            <div className=" w-full mt-12 h-full grid grid-cols-1 sm:grid-cols-4 gap-3">
              {Array.from({ length: 10 }).map((_, idx) => (
                <ProfileCard key={idx} index={idx} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TopMembers;
