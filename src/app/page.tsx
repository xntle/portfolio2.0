import Image from "next/image";
import { Projects } from "./Projects/page";  
import { FloatingDockDemo } from "./Projects/dock";

export default function Home() {
  return (
   <div className="bg-[#111111] text-white min-h-screen">
      <Projects />
      <FloatingDockDemo />
    </div>
      
  );
}
