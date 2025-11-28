'use client';
import Image from "next/image";
import Button from "./Button";
import "./styles/footer.css";


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="contact-logo">
          <Image 
            src="/images/CMS-logo-green.svg" 
            alt="CMS Logo" 
            width={182} 
            height={55} 
          />
          <h1>We are ready to serve you</h1>
          <Button text="Contact Us" />
      </div>
      <div className="second-col">
        <div className="links-contact">
          <div className="links-and-contacts">
            <div className="quick-links">
              <p className="contact-paragraph">Quick Links</p>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>
            <div className="contacts">
              <p className="contact-paragraph">Contacts</p>
              <ul>
                <li>(+250) 789 123 456</li>
                <li>info@cms.com</li>
                <li>Gisimenti, 37 KG, 176 Street, Kigali</li>
              </ul>
            </div>
          </div>
          <div className="socials">
            <p className="socials-p">Links</p>
            <ul>
              <li>
                <Image
                src='/images/x.svg'
                alt='X Logo'
                width={16}
                height={15}
                />
              </li>
              <li>
                <Image
                src='/images/linked-in.svg'
                alt='LinkedIn Logo'
                width={16}
                height={15}
                />
              </li>
              <li>
                <Image
                src='/images/instagram.svg'
                alt='Instagram Logo'
                width={16}
                height={15}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>{currentYear} Copyright, All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
