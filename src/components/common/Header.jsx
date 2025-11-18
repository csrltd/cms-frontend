import Image from "next/image";
import Button from "./Button";
import {Menu} from "lucide-react";
import "./styles/header.css";

export default function Header(){
  return (
    <header className='header'>
        <div className='header-logo'>
            <Image 
                src="/images/CMS-logo-green.svg" 
                alt="CMS Logo" 
                width={182} 
                height={55} 
            />
        </div>
        <nav className='nav-links'>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Blogs</a>

            <Button text="Contact Us" />

        </nav>
        <div className='hamburger'>
            <Menu size={32} />
        </div>
    </header>
  );
}
