"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Timeline } from "../components/ui/timeline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"; // Assuming you have the Heroicons package installed
import Navbar from "../components/ui/navbar";

const Experiences = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component only renders on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent rendering until the component is mounted

  const data = [
    {
      title: "headstarter AI",
      duration: "Jul 2024 - Sep 2024",
      position: "Software Engineer Fellow",
      imageSrc: "headstarter.png",
      desc: (
        <div>
          <p className="mt-3">
            • Developed{" "}
            <span className="font-bold text-white">7+ AI applications</span>{" "}
            using <span className="font-bold text-white">Next.js</span>,{" "}
            <span className="font-bold text-white">TypeScript</span>,{" "}
            <span className="font-bold text-white">OpenAI</span>,{" "}
            <span className="font-bold text-white">Pinecone</span>,{" "}
            <span className="font-bold text-white">Stripe</span>,{" "}
            <span className="font-bold text-white">Whisper</span>,{" "}
            <span className="font-bold text-white">Clerk</span>, and{" "}
            <span className="font-bold text-white">Firebase</span>
          </p>
          <p className="mt-1 pl-4">
            Cumulative user base of{" "}
            <span className="font-bold text-white">700+ active users</span> &
            average engagement rate of{" "}
            <span className="font-bold text-white">64.5%</span>.
          </p>
          <p className="mt-3">
            • Led a team of <span className="font-bold text-white">4</span> in
            the development and deployment of projects using{" "}
            <span className="font-bold text-white">Vercel</span> and{" "}
            <span className="font-bold text-white">AWS</span>.
          </p>
          <p className="mt-3">
            • Applied <span className="font-bold text-white">LLM methods</span>{" "}
            such as <span className="font-bold text-white">RAG</span> and
            utilized{" "}
            <span className="font-bold text-white">CRUD operations</span> and{" "}
            <span className="font-bold text-white">MVC design patterns</span> to
            improve application functionality.
          </p>

          <div className="flex direction-collumn gap-3">
            <a
              href="https://rizzgpt.xntle.com/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
              rizzgpt
            </a>
            <a
              href="https://talkaroo-lac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
              talkaroo
            </a>
          </div>
          <div className="flex direction-collumn gap-3">
            <a
              href="https://car-dealer-ai2-i0g4heafm-xntles-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
              ai voice assistant
            </a>
          </div>
          <div className="flex direction-collumn gap-3">
          <a
              href="https://applyez-waitlist.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
              applyEZ
            </a>
            <a
              href="https://flashcards-ai-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
              FlashAI
            </a>

          </div>
          <div className="flex direction-collumn gap-3">
            <a
              href="https://pantry-pal-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
              pantrypal
            </a>
            <a
              href="https://pantry-pal-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
              portfolio
            </a>
          </div>
        </div>
      ),
      content: (
        <div>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/headstarter1.png"
              alt="talkaroo"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-20 lg:h-40 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/headstarter2.png"
              alt="pam ai"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-20 lg:h-40 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/headstarter3.png"
              alt="rizzgpt"
              width={500}
              height={250}
              className="rounded-lg object-cover h-20 md:h-19 lg:h-40 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/headstarter4.png"
              alt="flashcard saas"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-20 lg:h-40 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/headstarter5.png"
              alt="apply easy"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-20 lg:h-40 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "UC DAVIS HEALTH",
      duration: "Jul 2024 - Sep 2024",
      position: "Software Engineer Intern",
      imageSrc: "ucdhealth.png",
      desc: (
        <div>
          <p className="mt-3">
            • Developed microscopy software in{" "}
            <span className="font-bold text-white">VB.net/C#</span> for tumor
            dye detection.
          </p>
          <p className="mt-1 pl-4">
            <span className="font-bold text-white">250%</span> increase in
            detection rate, <span className="font-bold text-white">600%</span>{" "}
            clarity boost.
          </p>

          <p className="mt-3">
            • Optimized software performance with refined algorithms.
          </p>
          <p className="mt-1 pl-4">
            <span className="font-bold text-white">150%</span> faster runtime.
          </p>

          <p className="mt-3">
            • Created a calibration tool for accurate surgical adjustments
            improving accuracy.
          </p>

          <p className="mt-3">
            • Automated DUET image renaming using{" "}
            <span className="font-bold text-white">PowerShell</span>.
          </p>
          <p className="mt-1 pl-4">
            Saved <span className="font-bold text-white">10+ hours</span> and
            ensured confidentiality.
          </p>

          <a
            href="https://www.youtube.com/watch?v=mrX9GUh_ES8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
            youtube video
          </a>
        </div>
      ),
      content: (
        <div>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/ucdhealth1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/ucdhealth2.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/ucdhealth3.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/ucdhealth4.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "LLD POOL & SPA Company",
      duration: "Dec 2021 - Jan 2024",
      position: "Product Manager",
      imageSrc: "LLD.png",
      desc: (
        <div>
          <p className="mt-3">
            • Spearheaded a successful redesign of{" "}
            <a
              href="https://linhlinhdan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-underline text-blue-500"
            >
              linhlinhdan.com
            </a>
            , the company&apos;s flagship{" "}
            <span className="font-bold text-white">e-commerce platform</span>.
          </p>
          <p className="mt-3">
            • Led a team of <span className="font-bold text-white">5</span>,
            including{" "}
            <span className="font-bold text-white">content writers</span>,
            developers, a{" "}
            <span className="font-bold text-white">UI/UX designers</span>, and{" "}
            <span className="font-bold text-white">marketers</span>, to
            successfully launch the product.
          </p>
          <p className="mt-3">
            • Worked closely with the CEO to develop a{" "}
            <span className="font-bold text-white">product roadmap</span>,{" "}
            <span className="font-bold text-white">prioritize features</span>,
            and manage the{" "}
            <span className="font-bold text-white">product backlog</span>.
          </p>

          <a
            href="https://drive.google.com/drive/folders/1XJ-H3vIF-TrgJWGewUAqEFj6bvA64GKi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
            linhlinhdan.com
          </a>
        </div>
      ),
      content: (
        <div>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/lld1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/lld2.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/lld3.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/lld4.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/lld5.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Public ClassAPCS",
      duration: "Jul 2024 - Sep 2024",
      position: "Founder",
      imageSrc: "apcs.png",
      desc: (
        <div>
          <p className="mt-3">
            • Designed a comprehensive educational curriculum for{" "}
            <span className="font-bold text-white">AP Computer Science A</span>{" "}
            and <span className="font-bold text-white">Principles</span>{" "}
            courses.
          </p>
          <p className="mt-3">
            • Provided personalized tutoring in{" "}
            <span className="font-bold text-white">programming basics</span>,{" "}
            <span className="font-bold text-white">data structures</span>,{" "}
            <span className="font-bold text-white">algorithms</span>, and{" "}
            <span className="font-bold text-white">problem-solving</span>.
          </p>

          <p className="mt-3">
            • Achieved significant improvement in students&apos; understanding and
            performance in{" "}
            <span className="font-bold text-white">AP Computer Science</span>{" "}
            courses.
          </p>

          <div className="flex direction-collumn gap-3">
            <a
              href="https://drive.google.com/drive/folders/1XJ-H3vIF-TrgJWGewUAqEFj6bvA64GKi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
              apcsa
            </a>
            <a
              href="https://drive.google.com/drive/folders/1aozieTdWLkdw1g-RcM1jEmitWnDqroa9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-3 text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1 text-blue" />
              apcsp
            </a>
          </div>
        </div>
      ),
      content: (
        <div>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/apcs1.png"
              alt="hero template"
              width={500}
              height={200}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/apcs2.png"
              alt="feature template"
              width={500}
              height={200}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/apcs3.png"
              alt="bento template"
              width={500}
              height={200}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/apcs4.png"
              alt="cards template"
              width={500}
              height={200}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="w-full max-w-2xl mx-auto p-4">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Experiences;
