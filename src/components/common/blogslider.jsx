"use client";
import Image from "next/image";
import { useState } from "react";
import "./styles/blogslider.css";
import SectionTitle from "./SectionTitle";

export default function BlogSlider() {
  const slides = [
    {
      id: 1,
      title: "The financial stories we tell ourselves",
      text: `This internal tug-of-war isn’t limited to our personal relationships; it shows up in our financial lives, too. Think about the stories you tell yourself when making spending decisions. Are you buying the luxury car because it aligns with your values, or because you feel pressured to keep up with those around you? Are you saying yes to another family vacation because you truly want to go, or because you fear disappointing your loved ones?`,
      image: "/Images/heroimage2.jpg",
    },
    {
      id: 2,
      title: "The financial stories we tell ourselves",
      text: `This internal tug-of-war isn’t limited to our personal relationships; it shows up in our financial lives, too. Think about the stories you tell yourself when making spending decisions. Are you buying the luxury car because it aligns with your values, or because you feel pressured to keep up with those around you? Are you saying yes to another family vacation because you truly want to go, or because you fear disappointing your loved ones?`,
      image: "/Frame 236.jpg",
    },
    {
      id: 3,
      title: "The financial stories we tell ourselves",
      text: `This internal tug-of-war isn’t limited to our personal relationships; 
      it shows up in our financial lives, too. Think about the stories you tell 
      yourself when making spending decisions.`,
      image: "/Frame 236.jpg",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="blogsection">
      <div className="blogcontainer">
        <div className="blogsectionheader">
          <SectionTitle text="Recent Blogs" />
          <h5 className="heading-1">
            Stay updated with trends, strategies, and expert perspectives that
            guide business success.
          </h5>
        </div>

        <div className="slider">
          <div className="blogcard">
            <div className="blogimage">
              <img src={slides[active].image} alt="" />
            </div>
            <div className="blogcontent">
              <div className="blogtexts">
                <h5 className="heading-1"> {slides[active].title}</h5>
                <p className="paragraph">{slides[active].text}</p>
              </div>

              <button className="button"> Read more</button>
            </div>
          </div>
          <div className="slideraction">
            <div className="slides">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={i === active ? "slideactive" : "slide"}
                  onClick={() => setActive(i)}
                ></span>
              ))}
            </div>
            <button className="button"> View all</button>
          </div>
        </div>
      </div>
    </div>
  );
}
