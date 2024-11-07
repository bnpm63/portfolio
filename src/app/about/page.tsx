"use client";

import Image from "next/image";
import Navbar from "@/app/components/navbar";
import { useState, useEffect } from "react";

export default function About() {
  const [text, setText] = useState("");
  const fullText = "About Me";
  const typingSpeed = 160; // typing speed in ms

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
    <div className="flex justify-center py-20">
      <div className="mx-8 w-full max-w-screen-md">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <div className="mt-20 text-left">
          <h1 className="text-4xl font-medium text-white mb-16">
            {text}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </h1>

          {/* About Section */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image and Coordinates */}
            <div className="md:w-1/2">
              <Image
                src="/about.jpg"  
                alt="About Me Image"
                width={500}
                height={500}
                className="object-cover rounded-xl"
              />
              <a
                href="https://www.google.com/maps/place/37%C2%B000'35.6%22N+122%C2%B011'41.2%22W/@37.0098767,-122.1947818,793m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d37.0098767!4d-122.1947818?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 font-medium hover:text-neutral-300 text-sm mt-2 inline-block"
              >
                37.0098767, -122.1947818
              </a>
            </div>

            {/* Description */}
            <div className="md:w-1/2">
              <p className="text-neutral-400 text-md">
                I&apos;m a second-year Computer Science student at UC Santa Cruz with a strong focus on machine learning and web development. I&apos;m currently assisting in research on autonomous agents for Robotic Process Automation (RPAs), exploring how AI can enhance efficiency and decision-making in automated systems. <br /><br />
                I&apos;m also the co-founder and CEO of Studify, an ed-tech company that leverages AI to help students streamline their learning processes. We develop tools that transcribe lectures into notes, solve academic problems, and create customized study guides. I&apos;m passionate about combining technology and education to make learning more accessible and effective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
