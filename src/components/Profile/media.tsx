import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Media = () => {
  return (
    <>
      {/* nav Tabs */}
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="favourites">Favourites</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="favourites">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>

      <div></div>
    </>
  );
};

export default Media;
