import { stats } from "../constants";

const Stat = ({ title, value }) => (
  <p className="flex items-center">
    <span className="text-white font-bold text-4xl mr-4">{value}</span>
    <span className="text-blue-gradient text-lg uppercase">{title}</span>
  </p>
);
const Count = () => {
  return (
    <section className="m-auto flex flex-col gap-4 sm:w-full sm:flex-row sm:justify-between sm:items-center">
      {stats.map((stat) => (
        <Stat id={stat.id} {...stat} />
      ))}
    </section>
  );
};

export default Count;
