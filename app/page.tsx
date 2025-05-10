import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader>{"dsp.dev"}</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-lavender selection:text-bglight">
          <main id="main">Main</main>
        </div>
      </div>
    </>
  );
}
