import { quotes } from "../assets";
import { feedback } from "../constants";

const PeopleCard = ({ content, name, title, img }) => (
  <div className="w-80 m-auto flex flex-col gap-y-8 p-8 rounded-xl hover:bg-gray-gradient">
    <div className="w-8">
      <img src={quotes} alt={quotes} />
    </div>
    <p className="text-white leading-loose">{content}</p>
    <div className="flex items-center gap-x-4">
      <div className="basis-16">
        <img src={img} alt={img} />
      </div>
      <div>
        <p className="text-white text-lg font-bold">{name}</p>
        <p className="text-dimWhite">{title}</p>
      </div>
    </div>
  </div>
);

const People = () => {
  return (
    <section>
      <div>
        <h1 className="text-white text-5xl font-bold leading-normal">What People are saying about us</h1>
        <p className="text-dimWhite leading-normal mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi est. Suscipit sunt nihil facilis inventore tempore obcaecati, quae consectetur.</p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-x-16 gap-y-32 mt-32">
        {feedback.map((feedbackItem) => (
          <PeopleCard key={feedbackItem.id} {...feedbackItem} />
        ))}
      </div>
    </section>
  );
};

export default People;
