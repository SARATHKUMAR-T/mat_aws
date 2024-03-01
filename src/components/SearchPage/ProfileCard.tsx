import { motion } from "framer-motion";
import { Card, CardFooter, CardHeader } from "../ui/card";
import person1 from "@/assets/images/member/01.jpg";
import { Link } from "react-router-dom";

const ProfileCard = ({ index = 0 }: { index?: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 * index } },
  };

  return (
    <motion.div
      className="group cursor-pointer"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Link to={`/search/1`} className="group">
        <Card className=" rounded-lg group-hover:shadow-glow group-hover:duration-300">
          <CardHeader className="">
            <motion.img
              src={person1}
              alt="person1"
              className="aspect-video rounded-lg h-48 w-60 group-hover:shadow-glow group-hover:duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </CardHeader>
          <CardFooter className="flex-col gap-3 text-center">
            <h1 className="text-xl font-bold">Andrio Guday</h1>
            <p>Active 1 Day</p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProfileCard;
