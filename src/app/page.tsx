// Home Component
import Image from "next/image";
import { FloatingDockDemo } from "./Projects/dock";
import { TextHoverEffect } from "./components/ui/text-hover-effect";
import Navbar from "./components/ui/navbar";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import '@fontsource/inter'; // Defaults to weight 400

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="w-full max-w-[650px] mx-auto p-4">
        <TextHoverEffect text="Thai An Le" />
        <h1 className="text-md font-dark text-gray-400 dark:text-gray-400 mb-8">
          Yo! Welcome to my portfolio. I&apos;m currently a senior studying computer science at UC Davis. I am passionate about product and software engineering.
        </h1>
        <div className="flex  collumn gap-5">
        <a
            href="https://drive.google.com/file/d/1hbJtE_3Hr1qMuF0pY_vQjYpt1boVpnH_/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
            resume
          </a>

        </div>
      </div>
    
    </div>
  );
}
