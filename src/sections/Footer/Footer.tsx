import { Mail, MapPin, Phone } from "lucide-react";
import { FooterColumn } from "./FooterColumn/FooterColumn";

const Footer = () => {
  const companyInfoLinks = [
    { label: "About Us", href: "#" },
    { label: "Carrier", href: "#" },
    { label: "We are hiring", href: "#" },
    { label: "Blog", href: "#" },
  ];

  const legalLinks = [
    { label: "About Us", href: "#" },
    { label: "Carrier", href: "#" },
    { label: "We are hiring", href: "#" },
    { label: "Blog", href: "#" },
  ];

  const featuresLinks = [
    { label: "Business Marketing", href: "#" },
    { label: "User Analytic", href: "#" },
    { label: "Live Chat", href: "#" },
    { label: "Unlimited Support", href: "#" },
  ];

  const resourcesLinks = [
    { label: "IOS & Android", href: "#" },
    { label: "Watch a Demo", href: "#" },
    { label: "Customers", href: "#" },
    { label: "API", href: "#" },
  ];

  const contactsLinks = [
    {
      label: "(480) 555-0103",
      href: "tel:+14805550103",
      icon: <Phone color="#96BB7C" />,
    },
    {
      label: "1234 North Avenue Luke Lane, South Bend, IN 360001",
      href: "#",
      icon: <MapPin color="#96BB7C" />,
    },
    {
      label: "onlineschool@example.com",
      href: "#",
      icon: <Mail color="#96BB7C" />,
    },
  ];

  return (
    <div className="bg-[#292930] flex justify-center py-12 px-4">
      <div className="max-w-[75rem] w-full grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
        <FooterColumn title="Company Info" links={companyInfoLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
        <FooterColumn title="Features" links={featuresLinks} />
        <FooterColumn title="Resources" links={resourcesLinks} />
        <div className="font-bold text-sm ">
          <h3 className="text-white mb-4">Get In Touch</h3>
          <ul className="space-y-2">
            {contactsLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-8 md:w-fit">{link.icon}</div>
                <a
                  href={link.href}
                  className="text-[#BFBFBF] duration-150 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
