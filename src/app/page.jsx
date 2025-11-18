'use client';

import Button from "@/components/common/Button";
import ContactSection from "@/components/common/ContactSection";
import { Footer } from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SectionTitle from "@/components/common/SectionTitle";

export default function Home() {

function greetings(){
    alert("Hello, welcome to our CMS!");
  }
  
  return (
    <>
      <Button text="Get Started" onclick={greetings}/>
      <br></br>
      <br></br>
      <br></br>
      <Header />
      <SectionTitle text="Our Services" />
      <ContactSection />
      <Footer />
    </>

  );
}
