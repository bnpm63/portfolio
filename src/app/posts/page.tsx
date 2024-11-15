import Navbar from "@/app/components/navbar";
import TypingText from "@/app/components/TypingText";

export default function Home() {
  return (
    <div className="flex justify-center py-20 px-8">
      <div className="w-full max-w-screen-md">
        
        <Navbar />
        <div className="mt-20 text-left">
          <h1 className="text-4xl font-normal text-white-500 mb-4">
          <TypingText fullText="Coming soon..." typingSpeed={135} />
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </h1>
          
        </div>
        
        
      </div>
    </div>
  );
}