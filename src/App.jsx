import Navbar from "./components/Navbar";
import { Billing, Business, Card, Company, Count, CTA, Footer, Header, People } from "./container";

const App = () => {
  return (
    <div className=" min-h-screen bg-gradient ">
      <div className="px-8 flex flex-col gap-y-16 m-auto max-w-7xl">
        <Navbar />
        <Header id="home" />
        <Count />
        <Business id="features" />
        <Billing id="product" />
        <Card />
        <People />
        <Company id="clients" />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default App;
