import Image from "next/image";
import "./styles/contactSection.css";
import Button from "./Button";
import SectionTitle from "./SectionTitle";      

export default function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-top">
        
        <div className="contact-image">
          <Image
            src="/images/contact-img.png"
            alt="Office Building"
            width={775}
            height={684}
          />
        </div>

        <div className="contact-form">
          <SectionTitle text="Contact Us" />
          <h2 className="form-heading">
            Ready to streamline your management process?<br />
            Contact us today!
          </h2>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label>Phone number</label>
                <input type="text" placeholder="Enter your phone number" />
              </div>
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea type="text" placeholder="Enter your message" />
            </div>

            <Button text="Send A message" className="contact-btn" />
          </form>
        </div>
      </div>

      <div className="bottom-info">

        <div className="info-card">
          <span className="icon">
            <Image
              src="/images/mail-01.png"
              alt="Email Icon"
              width={32}
              height={32}
            />
          </span>
          <h4>Email support</h4>
          <p>Our team can respond in real time</p>
          <strong>Info@Compstaffing.Com</strong>
        </div>

        <div className="info-card">
          <span className="icon">
            <Image
              src="/images/location-01.png"
              alt="Email Icon"
              width={32}
              height={32}
            />
          </span>
          <h4>Visit our office</h4>
          <p>Visit our office in real life</p>
          <strong>Gisementi, 37 KG, 1/5 Street, Kigali</strong>
        </div>

        <div className="info-card">
          <span className="icon">
            <Image
              src="/images/call-02.svg"
              alt="Email Icon"
              width={32}
              height={32}
            />
          </span>
          <h4>Call Us directly</h4>
          <p>Available during working hours</p>
          <strong>(+250) 793 898 746</strong>
        </div>

      </div>
    </section>
  );
}
