"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLink = ({
  href,
  title,
  dismissMobileMenu,
}: {
  href: string;
  title: string;
  dismissMobileMenu?: () => void;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={clsx(
        "block",
        {
          "md:bg-black md:w-min md:h-min md:rounded-[20px]": title === "Resume",
        },
        {
          "md:bg-[#ffffff] md:w-min md:h-min md:rounded-[20px]":
            pathname === href,
        }
      )}
      onClick={dismissMobileMenu}
    >
      <p
        className={clsx("text-[22px] font-normal text-black p-3", {
          "md:text-white": title === "Resume",
        })}
      >
        {title}
      </p>
    </Link>
  );
};

export default NavLink;
