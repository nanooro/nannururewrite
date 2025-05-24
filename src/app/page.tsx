
import Image from "next/image";
import Header from "@ui/header";
import Hero from "@ui/hero";

export default function Home() {
  return (
    <div className=" w-full min-h-screen  h-full bg-gray-100">
      <Header />
      <Hero />
    </div>
  );
}
