import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { LiaFacebookMessenger } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fjn2dhc",
      "template_ru4fqgs",
      form.current,
      "S4TYP5VevrggCv_Dm"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>mbappy254@gmail.com</h5>
            <a href="mailto:mbappy254@gmail.com" target="_blank">
              Send A Message
            </a>
          </article>
          <article className="contact_option">
            <LiaFacebookMessenger className="contact_icon" />
            <h4>Messenger</h4>
            <h5>Arafat Bappy</h5>
            <a href="https://m.me/arafat.bappy.779 " target="_blank">
              Send A Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5>+8801849675876</h5>
            <a
              href="https://api.whatsapp.com/send?phone+8801849675876"
              target="_blank"
            >
              Send A Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
