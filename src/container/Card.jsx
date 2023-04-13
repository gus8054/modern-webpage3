import { card } from "../assets";
import Button from "../components/Button";

const Card = () => {
  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:items-center">
      <div className="flex flex-col gap-8 items-start flex-1">
        <h1 className="text-white text-5xl font-bold leading-normal">Find a better card deal in few easy steps.</h1>
        <p className="text-dimWhite leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi est. Suscipit sunt nihil facilis inventore tempore obcaecati, quae consectetur.</p>
        <Button />
      </div>
      <div className="flex-1">
        <img src={card} alt={card} className="rounded-3xl" />
      </div>
    </section>
  );
};

export default Card;
