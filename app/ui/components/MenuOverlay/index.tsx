import React from "react";
import NavLink from "../NavLink";

const MenuOverlay = ({
  links,
  dismissMobileMenu,
}: {
  links: { title: string; path: string }[];
  dismissMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ul className="flex flex-col py-4 items-center bg-[#E1DFE0] bg-opacity-100">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            dismissMobileMenu={() => dismissMobileMenu(false)}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
