import { arrowUp, discount, robot } from "../assets";

const GetStartedBtn = ({ className }) => (
  <button className={`${className} w-[128px] h-[128px] rounded-full text-blue-gradient border-2 border-secondary text-2xl m-auto shrink-0`}>
    <img src={arrowUp} alt={arrowUp} className="w-8 float-right relative right-6" />
    Get Started
  </button>
);

const Header = ({ id }) => {
  return (
    <header id={id} className="flex flex-col items-start gap-8 lg:flex-row ">
      <div className="lg:w-2/3">
        <div className="flex items-center w-max gap-x-4 py-1 px-4 rounded-md bg-gray-gradient">
          <div>
            <img src={discount} alt={discount} />
          </div>
          <p className="text-dimWhite">
            <span className="text-white">20%</span> Discount For <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <GetStartedBtn className="hidden float-right m-4 sm:block lg:-translate-x-16" />
        <h1 className="text-white text-5xl font-bold leading-normal mt-4 sm:w-2/3">
          The Next <span className="text-blue-gradient">Generation</span> Payment Method.
        </h1>
        <p className="text-dimWhite leading-normal mt-4 sm:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sequi est. Suscipit sunt nihil facilis inventore tempore obcaecati, quae consectetur.</p>
      </div>
      <div className="w-full lg:w-1/3">
        <img src={robot} alt={robot} />
      </div>
      <GetStartedBtn className="sm:hidden" />
    </header>
  );
};

export default Header;
