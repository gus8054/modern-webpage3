import { apple, bill, google } from "../assets";

const Billing = ({ id }) => {
  return (
    <section id={id} className="flex flex-col gap-8 lg:flex-row lg:items-center">
      <div className="flex flex-col gap-8 flex-1 lg:order-2">
        <h1 className="text-white text-5xl font-bold leading-normal">Easily control your billing &amp; invoicing</h1>
        <p className="text-dimWhite leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi est. Suscipit sunt nihil facilis inventore tempore obcaecati, quae consectetur.</p>
        <div className="flex gap-x-8 justify-start">
          <div className="flex-[0_1_9rem]">
            <img src={apple} alt={apple} />
          </div>
          <div className="flex-[0_1_9rem]">
            <img src={google} alt={google} />
          </div>
        </div>
      </div>
      <div className="flex-1 lg:order-1">
        <img src={bill} alt={bill} className="rounded-3xl" />
      </div>
    </section>
  );
};

export default Billing;
