import Navbar from "@/app/components/navbar";
import TypingText from "@/app/components/TypingText";

export default function Contact() {
  return (
    <div className="flex justify-center py-20 px-8">
      <div className="w-full max-w-screen-md">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <div className="mt-20 text-left">
          <h1 className="text-4xl font-base text-white mb-8">
            <TypingText fullText="Contact Me" typingSpeed={145} />
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </h1>
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
