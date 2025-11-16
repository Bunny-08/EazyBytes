import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <>
      <Navbar />

      <section className="contact wrapper">
        <h1>Contact Me</h1>
        <p className="contact-subtext">
          Have a question, project idea, or want to collaborate? Send a message!
        </p>

  {status === "success" && <div className="alert success">✅ Message sent successfully!</div>}
  {status === "error" && <div className="alert error">❌ Something went wrong. Try again.</div>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input type="email" placeholder="EX: Name@gmail.com" required />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea rows="5" placeholder="Type your message..." required />
          </div>

          <button type="submit" className="btn-primary button">Send Message</button>
        </form>

        <div className="contact-socials">
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
          <a href="mailto:youremail@gmail.com">Email</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
