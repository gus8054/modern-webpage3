import { clients } from "../constants";

const Company = ({ id }) => {
  return (
    <section id={id} className="grid place-items-center grid-cols-repeatCompany gap-x-28 gap-y-4 justify-center">
      {clients.map((client) => (
        <img key={client.id} src={client.logo} alt={client.logo} />
      ))}
    </section>
  );
};

export default Company;
