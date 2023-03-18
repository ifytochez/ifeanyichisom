import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="reach_out">
      <div className="reachout_writeup">
        <p>
          This doesn’t need to end here. Let's design something spectacular!
        </p>
        <button>
          <a href="mailto:ifeanyichisomjane@gmail.com">
            ifeanyichisomjane@gmail.com
          </a>
        </button>
      </div>
      <div className="reachout_pix">
        <img src="/images/borderless13.png" alt="" />
      </div>
    </div>
  );
}

export default Contact;
