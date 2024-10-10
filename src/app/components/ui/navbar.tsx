import Link from "next/link";
import React from "react";
import { LinkPreview } from "./link-preview";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
// import {
//   Icon360,
//   IconBrandGithub,
//   IconBrandLinkedin,
//   IconMail,
// } from "@tabler/icons-react";
import { Icons } from "../icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-[650px] mx-auto px-4 mt-7 mb-4 flex justify-between items-center">
        <ul className="flex space-x-8 text-xs md:text-base">
          <li>
            <Link href="/" className=" font-100 hover:text-blue-500">
              home
            </Link>
          </li>
          <li>
            <Link href="/Projects" className=" font-300 hover:text-blue-500">
              projects
            </Link>
          </li>
          <li>
            <Link href="/Experiences" className=" font-300 hover:text-blue-500">
              experiences
            </Link>
          </li>
        </ul>

        <ul className="flex space-x-8 text-xs md:text-base">
          <li>
            <LinkPreview
              url="https://linkedin.com/in/thai-an-le"
              className="font-small text-white hover:text-blue-500 flex collumn"
            >
              {/* <a
                href="https://linkedin.com/in/thai-an-le"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 0 }}
              > */}
                <Icons.linkedin className="w-6 h-6" />
              {/* </a> */}
            </LinkPreview>
          </li>
          <li>
            <LinkPreview
              url="https://github.com/xntle"
              className=" font-small text-white hover:text-blue-500"
            >
              {/* <a
                href="https://github.com/xntle"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 0 }}
              > */}
                <Icons.github className="w-6 h-6" />
              {/* </a> */}
            </LinkPreview>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
