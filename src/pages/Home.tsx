import NewPeople from "@/components/Home/NewPeople";
import Statistics from "@/components/Home/Statistics";
import { Helmet } from "react-helmet-async";
import StoryPage from "./StoryPage";
import TopMembers from "@/components/Home/TopMembers";
import AboutUs from "@/components/Home/aboutUs";
import Hero2 from "@/components/Home/Hero2";

const Home = () => {
  const fullUrl = window.location.href;
  console.log(fullUrl, "full url");
  return (
    <main>
      <Helmet>
        <title>Christians-Online</title>
        <meta name="description" content="Austrailas no1 matrimony website" />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* <Hero /> */}
      <Hero2 />
      <NewPeople />
      <Statistics />
      <StoryPage />
      <TopMembers />
      <AboutUs />
    </main>
  );
};

export default Home;
