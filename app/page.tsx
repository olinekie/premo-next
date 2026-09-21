import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Realizations from "@/components/Realizations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <Realizations />
      <Testimonials />
    </>
  );
}