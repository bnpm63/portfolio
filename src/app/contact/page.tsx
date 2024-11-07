"use client";

import Navbar from "@/app/components/navbar";
import { useState, useEffect } from "react";

export default function Contact() {
  const [text, setText] = useState("");
  const fullText = "Contact Me";
  const typingSpeed = 145; // typing speed in ms

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
        setTimeout(type, typingSpeed);
      }
    };
    type();
  }, []);

  return (
    <div className="flex justify-center py-20 px-8">
      <div className="w-full max-w-screen-md">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <div className="mt-20 text-left">
          <h1 className="text-4xl font-medium text-white mb-8">{text}<span className="border-r-2 border-white animate-pulse ml-1"></span></h1>
          <p className="text-neutral-400 mb-8">
            Feel free to reach out through any of the following platforms:
          </p>

          {/* Contact List */}
          <ul className="space-y-6 text-lg">
            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/benjamin-pham-3004532ba/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-base hover:text-neutral-400 transition duration-200"
              >
                LinkedIn
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                href="https://github.com/bnpm63" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-base hover:text-neutral-400 transition duration-200"
              >
                GitHub
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                href="mailto:belpham@ucsc.edu" 
                className="text-white font-base hover:text-neutral-400 transition duration-200"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
