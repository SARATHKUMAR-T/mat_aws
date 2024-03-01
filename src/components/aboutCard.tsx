/* eslint-disable @typescript-eslint/no-explicit-any */
export default function AboutCard({ about }: { about: any }) {
  return (
    <div className="h-full p-2 w-full bg-slate-300 rounded-lg  grid grid-cols-[3rem,auto] sm:grid-cols-[6rem,auto] py-6 px-4  ">
      <div className="place-self-start w-full px-1 sm:px-4">
        <div className="h-14 w-full flex items-center justify-center rounded-lg bg-primary text-white">
          <p className="text-xl font-bold">{`0${about.id}`}</p>
        </div>
      </div>
      <div className="w-full">
        <h1 className="mb-3 text-4xl text-primary">{about.title}</h1>
        <p className="font-medium">{about.des}</p>
      </div>
    </div>
  );
}
