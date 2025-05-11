import "./globals.css";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Loader>{"dsp.dev"}</Loader>
      <div className="bg-primary-black overflow-hidden">
        <div className="selection:lavender">
          <Header />
          <main id="main">
            <HeroSection />
          </main>
        </div>
      </div>
    </>
  );
}
