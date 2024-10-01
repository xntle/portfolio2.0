"use client";
import React from "react";
import { LinkPreview } from "../components/ui/link-preview";
import Navbar from "../components/ui/navbar";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="w-full max-w-3xl mx-auto p-4">
        <TextHoverEffect text="Contact" />
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl  text-left mb-10">
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-medium text-sm font-medium text-blue-700 hover:underline dark:text-blue-500"
        >
            linkedin
        </LinkPreview>{" "}
      </p>
    </div>
    </div>
    
  );
}

export default Contact;