import Image from "next/image";
import Navbar from "@/app/components/navbar";
import TypingText from "@/app/components/TypingText";

export default function About() {
  return (
    <div className="flex justify-center py-20">
      <div className="mx-8 w-full max-w-screen-md">

        <Navbar />

        <div className="mt-20 text-left">
          <h1 className="text-4xl font-base text-white mb-16">
            <TypingText fullText="About Me" typingSpeed={160} />
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </h1>

          <div className="flex flex-col md:flex-row gap-6 items-start">
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
                className="text-neutral-400 font-normal hover:text-gray-200 transition duration-200 text-sm mt-2 inline-block"
              >
                37.0098767, -122.1947818
              </a>
            </div>

            <div className="md:w-1/2">
              <p className="text-neutral-500 font-normal text-md">
                I&apos;m a second-year Computer Science student at UC Santa Cruz with a strong focus on machine learning and web development. I&apos;m currently assisting in research on autonomous agents for Robotic Process Automation (RPAs), exploring how AI can enhance efficiency and decision-making in automated systems. <br /><br />
                In my free time, I love to read and write, constantly exploring new ideas and perspectives—feel free to check out my posts, including book reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
