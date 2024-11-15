"use client";
import { useState, useEffect, useRef } from "react";

interface TypingTextProps {
  fullText: string;
  typingSpeed?: number;
}

export default function TypingText({ fullText, typingSpeed = 100 }: TypingTextProps) {
  const [text, setText] = useState("");
  const indexRef = useRef(0);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const type = () => {
      if (indexRef.current <= fullText.length) {
        setText(fullText.slice(0, indexRef.current));
        indexRef.current++;
        timeoutIdRef.current = setTimeout(type, typingSpeed);
      } else {
        // Typing
        if (timeoutIdRef.current) {
          clearTimeout(timeoutIdRef.current);
        }
      }
    };

    type(); 

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [fullText, typingSpeed]);

  return <>{text}</>;
}
