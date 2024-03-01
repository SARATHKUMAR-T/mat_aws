import aboutImage from "@/assets/images/about.jpg";
import { Separator } from "../ui/separator";
import AboutCard from "../aboutCard";

const about = [
  {
    id: 1,
    title: "Our Mission",
    des: "ChristiansOnline.com.au is an effort to bring together Christian Dating not only to churches in Australia, but more importantly Christian people. We hope and pray that working together as an online Christian Community will help us all to reach out to Christians, as well as non-Christians and spread the word of God.",
  },
  {
    id: 2,
    title: "What We Do",
    des: "Christians Online was built in an effort to create a central location for all single Christians, regardless of their denomination, to communicate and meet each other online. Christians Online provides the functionality enabling communication via our Christians Online Blog, live chat and personal messages.",
  },
  {
    id: 3,
    title: "The Power of Streaks",
    des: "Streaks are a proven method to build habits, increase productivity, and maintain focus. When you commit to a streak, you're not just setting a goal; you're establishing a system of consistency that leads to lasting change. Each day you successfully complete your streak, you'll feel a sense of accomplishment and motivation to continue.",
  },
  {
    id: 4,
    title: "Community Support",
    des: "But it's not just about streaks. Zemo is also about building a community of individuals who understand your journey and are there to support you every step of the way. Our platform connects you with like-minded people who share your goals and challenges. You can follow their progress, share your experiences, and encourage each other to stay on track.",
  },
  {
    id: 5,
    title: "Join Us on this Journey",
    des: "Whether you're looking to kick a bad habit, start a new one, or simply want to be a part of a community that values personal growth, Zemo welcomes you with open arms. Join us in the quest for self-improvement, consistency, and a life less dominated by screens.",
  },
];

const AboutUs = () => {
  return (
    <section className="my-12 sm:my-24 px-4">
      <div
        style={{ backgroundImage: `url(${aboutImage})` }}
        className="relative py-12 sm:py-24  bg-cover bg-center  h-20 w-full flex items-center justify-center"
      >
        <h1 className="text-3xl font-bold text-white">About Us</h1>
        <div className="absolute inset-0 bg-rose-700 bg-opacity-20 z-10 " />
      </div>
      {/* content box */}
      <div className="flex items-center justify-center my-20">
        <div className="flex items-center gap-2">
          <div className="text-end text-primary w-sm text-5xl font-bold tracking-wide">
            <h1>Find Your Perfect</h1>
            <h1>Partner</h1>
          </div>
          <Separator orientation="vertical" className="h-24 w-1 bg-slate-700" />
          <p className="w-sm">
            Stories And Information To Help Your Plan And Protect.
          </p>
        </div>
      </div>

      {/* main content */}
      <div className="max-w-4xl space-y-8 rounded-md mt-6  mx-auto py-8  ">
        {about.map(about => (
          <AboutCard key={about.title} about={about} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
