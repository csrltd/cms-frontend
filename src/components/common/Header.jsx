'use client';

import Image from "next/image";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./styles/header.css";
import Link from "next/link"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container"> 
         <div className="header-logo">
        <Image 
          src="/images/CMS-logo-green.svg" 
          alt="CMS Logo" 
          width={182} 
          height={55} 
        />
      </div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <div className="navlinks">
        <Link  className="Navlink"   href="/">Home</Link>
        <Link href="/team">Team</Link>
        <Link href="/#aboutus">About Us</Link>
        <Link href="/#services">Services</Link>
        </div>

        <Link href="/#contact-btn"><Button text="Contact Us" /></Link>
       
       

        {/* <Link href="/blogs">Blogs</Link> */}

        
      </nav>
    

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </div>
         </div>
     
    </header>
  );
}
