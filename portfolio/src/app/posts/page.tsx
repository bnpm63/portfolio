"use client";
import Navbar from "@/app/components/navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Coming soon...";
  const typingSpeed = 130; // typing speed in ms

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
        
        <Navbar />
        <div className="mt-20 text-left">
          <h1 className="text-4xl font-medium text-white-500 mb-4">
            {text}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </h1>
          
        </div>
        
        
      </div>
    </div>
  );
}
