import Navbar from "@/app/components/navbar";
import TypingText from "@/app/components/TypingText";

export default function Home() {
  return (
    <div className="flex justify-center py-20 px-8">
      <div className="w-full max-w-screen-md">
        <Navbar />

        <div className="mt-20 text-left">
          <h1 className="text-5xl font-normal text-white-400 mb-4">
            <TypingText fullText="Hey, I'm Benjamin" typingSpeed={105} />
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </h1>
          <p className="text-neutral-400 font-normal text-md mt-16">
            I&apos;m a second-year Computer Science student at{" "}
            <a
              href="https://www.ucsc.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-normal hover:text-yellow-200 transition duration-200"
            >
              UC Santa Cruz
            </a>
            , passionate about machine learning and web development. I blend these passions to craft innovative solutions.
          </p>
        </div>

        <div className="mt-20 text-left">
          <h1 className="text-3xl font text-white underline font-light mb-12">
            My Projects
          </h1>

          <div className="space-y-10">
            <hr className="border-t border-neutral-700 mb-4" />

            {/*  1 */}
            <div className="flex flex-col gap-4 py-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-neutral-400 mb-2">
                <p className="text-neutral-600">January 2025</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                  <a
                    href="https://youtu.be/YsSg1ZTZAfc"
                    className="text-blue-500 font-semibold hover:text-blue-300 transition duration-200 flex items-center"
                  >
                    See it in action <span className="ml-2">→</span>
                  </a>
                  <a
                    href="https://github.com/bnpm63/realestate-ml"
                    className="text-white hover:text-neutral-400 transition duration-200 flex items-center"
                  >
                    View on Github <span className="ml-2">→</span>
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-light text-white mt-4">Machine Learning Real Estate Valuation </h2>
              <p className="text-neutral-400 text-sm">
                Predicts the value of a home based on geographical and architectural aspects using a Random Forest Algorithm.
              </p>
            </div>

            <hr className="border-t border-neutral-700 mb-4" />

            <div className="flex flex-col gap-4 py-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-neutral-400 mb-2">
                <p className="text-neutral-600">October 2024</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                  <a
                    href="https://github.com/bnpm63/photolibrary"
                    className="text-white hover:text-neutral-400 transition duration-200 flex items-center"
                  >
                    View on Github <span className="ml-2">→</span>
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-light text-white mt-4">AWS Photo Library</h2>
              <p className="text-neutral-400 text-sm">
                AWS Photo Library is a cloud-powered photo storage app leveraging Amazon EC2 and S3.
              </p>
            </div>

            <hr className="border-t border-neutral-700 mb-4" />

            {/*  3 */}
            <div className="flex flex-col gap-4 py-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-neutral-400 mb-2">
                <p className="text-neutral-600">March 2024</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                  <a
                    href="https://github.com/bnpm63/smartplate"
                    className="text-white hover:text-neutral-400 transition duration-200 flex items-center"
                  >
                    View on Github <span className="ml-2">→</span>
                  </a>
                </div>
              </div>

              <h2 className="text-2xl font-light text-white mt-4">SmartPlate</h2>
              <p className="text-neutral-400 text-sm">
                SmartPlate is a nutrition-tracking app that lets users stay motivated through gamification.
              </p>
            </div>

            <hr className="border-t border-neutral-700 mb-4" />

            {/*
            <div className="mt-20 flex justify-end">
              <div className="flex space-x-6">
                <a
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-neutral-500 hover:text-neutral-400 transition duration-200" />
                </a>
                <a href="mailto:your-email@example.com">
                  <Mail className="w-5 h-5 text-neutral-500 hover:text-neutral-400 transition duration-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/your-linkedin-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-neutral-500 hover:text-neutral400 transition duration-200" />
                </a>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
