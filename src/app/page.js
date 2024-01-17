import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Prevention from "@/components/Prevention";
import Symptoms from "@/components/Symptoms";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Prevention />
      <Symptoms />
      <Contact />
    </>
  );
}
