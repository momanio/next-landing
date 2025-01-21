import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <About />
      <Contact />
    </Layout>
  );
}
