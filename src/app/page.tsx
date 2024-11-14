"use client";
import Navbar from "@/app/components/navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Hey, I'm Benjamin";
  const typingSpeed = 105; // typing speed in ms

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
          <h1 className="text-5xl font-normal text-white-400 mb-4">
            {text}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </h1>
          <p className="text-neutral-400 font-normal text-md mt-16">
            I&apos;m a second-year Computer Science student at{" "}
            <a
              href="https://www.ucsc.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-normal hover:text-yellow-200 transition duration-400 ease-in-out transform hover:scale-105"
            >
              UC Santa Cruz
            </a>
            , passionate about machine learning and web development. I blend these passions to craft innovative solutions.
          </p>
        </div>
        {/* specializing in AI and web development. I blend these passions to craft innovative solutions. */}
        <div className="mt-20 text-left">
          <h1 className="text-3xl font text-white font-normal mb-12">My Projects</h1>

          <div className="space-y-10">
            <hr className="border-t border-neutral-700 mb-4" />

            {/* Project 1 */}
            <div className="flex flex-col gap-4 py-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-neutral-400 mb-2">
                <p>November 2024</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                  <a
                    href="https://github.com/StudifyAI/studify"
                    className="text-blue-500 font-semibold hover:text-blue-400 flex items-center"
                  >
                    See it in action <span className="ml-2">→</span>
                  </a>
                  <a
                    href="https://github.com/StudifyAI/studify"
                    className="text-white hover:text-neutral-400 flex items-center"
                  >
                    View on Github <span className="ml-2">→</span>
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-normal text-white mt-4">Studify</h2>
              <p className="text-neutral-400 text-sm">
                Studify is an AI-powered study app designed to support students.
              </p>
            </div>

            <hr className="border-t border-neutral-700 mb-4" />

            {/* Project 2 */}
            <div className="flex flex-col gap-4 py-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-neutral-400 mb-2">
                <p>October 2024</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                  <a
                    href="https://github.com/bnpm63/photolibrary"
                    className="text-white hover:text-neutral-400 flex items-center"
                  >
                    View on Github <span className="ml-2">→</span>
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-normal text-white mt-4">AWS Photo Library</h2>
              <p className="text-neutral-400 text-sm">
                AWS Photo Library is a cloud-normald photo storage app leveraging Amazon EC2 and S3.
              </p>
            </div>

            <hr className="border-t border-neutral-700 mb-4" />

            {/* Project 3 */}
            <div className="flex flex-col gap-4 py-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-neutral-400 mb-2">
                <p>March 2024</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                  <a
                    href="https://github.com/bnpm63/smartplate"
                    className="text-white hover:text-neutral-400 flex items-center"
                  >
                    View on Github <span className="ml-2">→</span>
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-normal text-white mt-4">SmartPlate</h2>
              <p className="text-neutral-400 text-sm">
                SmartPlate is a nutrition-tracking app that lets users stay motivated through gamification.
              </p>
            </div>

            <hr className="border-t border-neutral-700 mb-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
