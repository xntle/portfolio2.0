import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-4xl mx-auto">
        <ul className="flex space-x-12 text-lg font-small">
          <li>
            <Link href="/" className="hover:text-blue-500">
              home
            </Link>
          </li>
          <li>
            <Link href="/Projects" className="hover:text-blue-500">
              projects
            </Link>
          </li>
          <li>
            <Link href="/Experiences" className="hover:text-blue-500">
              experiences
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-blue-500">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
