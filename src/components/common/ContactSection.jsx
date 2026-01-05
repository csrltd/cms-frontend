"use client";
import Image from "next/image";
import "./styles/contactSection.css";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import React, { useEffect, useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.full_name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setResponseMessage("Please fill in all fields");
      return;
    }
    setStatus("submitting");
    setResponseMessage("");

    // const API_URL = process.env.PUBLIC_API_URL;
    const blogEndpoint = "https://api.cms.csrlimited.com/api/contact/";
    console.log(blogEndpoint);

    try {
      const response = await fetch(blogEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // console.log(formData)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="contact-section" id="contact-btn">
      <div className="contact-container">
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
            <h4>
              Ready to streamline your management process?
              <br />
              Contact us today!
            </h4>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="inputlabels">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    disabled={status === "submitting"}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label className="inputlabels">Name</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    disabled={status === "submitting"}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="inputlabels">Subject </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  disabled={status === "submitting"}
                  onChange={handleChange}
                  placeholder="Enter subject"
                />
              </div>

              <div className="form-group">
                <label className="inputlabels">Message</label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  disabled={status === "submitting"}
                  onChange={handleChange}
                  placeholder="Enter your message"
                />
              </div>

              <Button
                text="Send A message"
                disabled={status === "submitting"}
                className="contact-btn"
              />
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
            <h5>Email support</h5>
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
            <h5>Visit our office</h5>
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
            <h5>Call Us directly</h5>
            <p>Available during working hours</p>
            <strong>(+250) 793 898 746</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
