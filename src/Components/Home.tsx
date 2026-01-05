import Hero from "./Hero";
import About from "./About";

export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <Hero />
      </div>
      <About />
    </>
  );
}
