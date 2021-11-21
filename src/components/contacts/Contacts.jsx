import "./contacts.scss";
import { useState } from "react";

export default function Contacts() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <textarea placeholder="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for your message. I'll reply shortly</span>}
        </form>
      </div>
    </div>
  );
}
