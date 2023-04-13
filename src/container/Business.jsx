import Button from "../components/Button";
import { features } from "../constants";

const ListItem = ({ icon, title, content }) => (
  <li className="flex items-start gap-4 mt-8 p-4 rounded-xl hover:bg-gray-gradient">
    <div className="w-16 h-16 bg-dimBlue rounded-full p-4 shrink-0">
      <img src={icon} alt={icon} />
    </div>
    <div>
      <p className="text-white font-bold text-lg">{title}</p>
      <p className="text-dimWhite">{content}</p>
    </div>
  </li>
);

const Business = ({ id }) => {
  return (
    <section id={id} className="flex flex-col gap-8 lg:flex-row lg:items-center">
      <div className="flex flex-col items-start gap-8">
        <h1 className="text-white text-5xl font-bold leading-normal">You do the business, we'll handle the money.</h1>
        <p className="text-dimWhite leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi est. Suscipit sunt nihil facilis inventore tempore obcaecati, quae consectetur.</p>
        <Button />
      </div>
      <ul>
        {features.map((feature) => (
          <ListItem key={feature.id} {...feature} />
        ))}
      </ul>
    </section>
  );
};

export default Business;
