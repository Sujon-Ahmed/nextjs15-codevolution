"use client";
import Link from "next/link";
import { navLinks } from "../_lib/navigations";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-white shadow-md rounded-xl px-8 py-4 mt-5 max-w-md mx-auto">
      <ul className="flex justify-around space-x-6">
        {navLinks.map((item) => {
          const isActive =
            pathname == item.href ||
            (pathname.startsWith(item.href) && item.href != "/");
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                }
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
