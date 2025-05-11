import "./globals.css";
import Loader from "@/components/Loader";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Loader>{"dsp.dev"}</Loader>
      <div className="bg-primary-black flex items-center justify-center">
        <div className="w-7xl px-4">
          <main id="main">
            <HeroSection />
          </main>
        </div>
      </div>
    </>
  );
}
