interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="font-bold text-sm">
      <h3 className="text-white md:mb-6 mb-2">{title}</h3>
      <ul className="md:space-y-4 space-y-2">
        {links.map((link, index) => (
          <li key={index}>
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
  );
};
