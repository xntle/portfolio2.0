import Link from "next/link";
import React from "react";
import { LinkPreview } from "./link-preview";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-3xl mx-auto px-4 mt-7"> 
        <ul className="flex space-x-16 text-sm md:text-base">
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
          <LinkPreview
          url="https://linkedin.com/in/thai-an-le"
          className="font-medium font-medium text-white hover:text-blue-500"
          >
            linkedin
          </LinkPreview>
          </li>
          <li>
          <LinkPreview
          url="https://github.com/xntle"
          className="font-medium font-medium text-white hover:text-blue-500"
          >
            github
          </LinkPreview>
          </li>
          {/* <li>
            <Link href="/Contact" className="hover:text-blue-500">
              contact
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
