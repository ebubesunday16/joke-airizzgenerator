import CraftTheSetup from "@/Sections/Craftthesetup";
import Hero from "@/Sections/Hero";
import HowItWorks from "@/Sections/HowItWorks";
import JokeGenerator from "@/components/generator";
import Image from "next/image";

export default function Home() {
  return (
   <div className="space-y-16">
      <Hero />
      <JokeGenerator />
      <CraftTheSetup />
      <HowItWorks />


   </div>
  );
}
