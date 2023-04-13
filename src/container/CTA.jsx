import Button from "../components/Button";

const CTA = () => {
  return (
    <section className="rounded-xl bg-gray-gradient p-8 flex flex-col gap-8 items-center sm:flex-row sm:justify-between">
      <div className="sm:w-2/3">
        <h1 className="text-white font-bold text-4xl leading-normal">Let's try our service now!</h1>
        <p className="text-dimWhite mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur corrupti reprehenderit inventore sapiente fuga! Aliquid, eos! Magni, eligendi deserunt!</p>
      </div>
      <Button />
    </section>
  );
};

export default CTA;
