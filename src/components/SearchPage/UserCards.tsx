import ProfileCard from "./ProfileCard";

const UserCards = () => {
  return (
    <section className="pt-6 grid grid-cols-1 sm:grid-cols-4 gap-3">
      {Array.from({ length: 20 }).map((_, idx) => (
        <ProfileCard key={idx} index={idx} />
      ))}
    </section>
  );
};

export default UserCards;
