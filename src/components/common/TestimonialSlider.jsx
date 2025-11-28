"use client";
import Image from "next/image";
import { useState } from "react";
import "./styles/TestimonialSlider.css";
import { useEffect } from "react";
import SectionTitle from "./SectionTitle";
export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

    const testimonials = [

          { text: "Collaborating with this team has transformed the way we operate. Their ability to understand our vision and deliver practical, results-driven guidance made all the difference.", 
            author: "Peter Ngoga" },
          {  text: "Their dedication and attention to detail exceeded our expectations. They didn’t just offer solutions — they became a true partner in our growth.", 
            author: "Peter Ngoga" },
          {  text: "Working with this team has been a game-changer for our business. Their expertise in connecting us with the right investors and providing tailored strategies has truly set us on a path to success.", 
            author: "Peter Ngoga" },
          {  text: "What stood out most is how they personalized every step for us. It felt like working with a team that genuinely cares about our success.", 
            author: "Peter Ngoga" },
          { text: "They helped us simplify complex challenges and provided clear strategies that produced immediate results. We couldn’t have asked for a better team.",
             author: "Peter Ngoga" },
 
    ];

    
      useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

       const leftIndex = (index - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (index + 1) % testimonials.length;

  return (
    
  <div className="testimonialssection">
          <div className="testimonialscontainer">
            <div className="testimonialsheader">
              <SectionTitle text="Testimonials" />  
              <h4 className="headind-1">
                Real experiences from clients who have grown with our guidance
                and support.
              </h4>
            </div>

            <div className="testimonialscoursels">
              <div className="testimonialcard  testimonialside">
                <div className="testimonialicon"></div>
                <p className="testimonial-text">{testimonials[leftIndex].text}</p>
                <h6>{testimonials[leftIndex].author}</h6>
                </div>

                <div className="testimonialcard  testimonialactive">
                <div className="testimonialicon"></div>
                <p className="testimonial-text">{testimonials[index].text}</p>
                <h6>{testimonials[index].author}</h6>
                </div>

                <div className="testimonialcard  testimonialside">
                <div className="testimonialicon"></div>
                <p className="testimonial-text">{testimonials[rightIndex].text}</p>
                <h6>{testimonials[rightIndex].author}</h6>
                </div>
              </div>

             <div className="ts-dots">

               {testimonials.map((_, i) => (
          <span
            key={i}
            className={`ts-dot ${index === i ? "ts-dot-active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>))}

            </div>
            </div>
            
          </div>

  )

    



}