import Image from "next/image";
import Header from "@/components/Header";
import { i } from "framer-motion/client";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}
