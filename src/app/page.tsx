// Home Component
import Image from "next/image";
import { FloatingDockDemo } from "./Projects/dock";
import { TextHoverEffect } from "./components/ui/text-hover-effect";
import Navbar from "./components/ui/navbar";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-neutral-200 dark:text-neutral-00 mb-8 mt-5">
          Hi! I am
        </h1>
        <TextHoverEffect text="An Le" />
        <h1 className="text-4xl font-bold text-neutral-200 dark:text-neutral-00 mb-8">
          welcome to my portfolio
        </h1>
      </div>
    </div>
  );
}
