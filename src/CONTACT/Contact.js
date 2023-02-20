import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <p className="h3">This doesn't have to end here</p>
        <p className="work">
          If you'd like to work together or make any further enquiries{" "}
        </p>
        <p>or just looking to connect. Get in Touch</p>

        <div className="contact-details">
          <button>
            <a href="mailto:ifeanyichisomjane@gmail.com">
              ifeanyichisomjane@gmail.com
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
