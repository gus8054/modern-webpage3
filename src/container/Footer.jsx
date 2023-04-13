import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const FooterUL = ({ title, links }) => (
  <ul className="flex flex-col gap-y-4 items-start">
    <li className="text-white font-bold">{title}</li>
    {links.map((link) => (
      <li>
        <a className="text-dimWhite hover:text-secondary" href={link.link}>
          {link.name}
        </a>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap gap-8 mb-16 lg:flex-row lg:justify-between lg:items-start">
      <div className="w-2/3 lg:basis-1/3">
        <div className="w-64">
          <img src={logo} alt={logo} className="brightness-[5]" />
        </div>
        <p className="mt-8 text-dimWhite">A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className="flex justify-between items-start lg:basis-1/2">
        {footerLinks.map((footerLink) => (
          <FooterUL {...footerLink} />
        ))}
      </div>
      <hr className="w-full" />
      <p className="text-white">Copyrigth &copy; 2023 DongHyun.</p>
      <div className="flex gap-4 items-center justify-center">
        {socialMedia.map(({ id, icon, link }) => (
          <a href={link} key={id}>
            <img src={icon} alt={icon} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
