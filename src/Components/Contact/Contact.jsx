import React from "react";
import "./Contact.css";
import mailIcon from "../../assets/mail.png";
import phoneIcon from "../../assets/phone.png";
import locationIcon from "../../assets/location.png";
function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f17da249-370f-4736-8fc1-1411deef3568");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let`s talk</h1>
          <p>
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a question
            or just want to say hi, feel free to reach out.
            <div className="contact-details">
              <div className="contact-detail">
                <img className="contact-img" src={mailIcon} alt="mail" />
                <p>vladyslavshevchuk2007@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img className="contact-img" src={phoneIcon} alt="phone" />
                <p>+380979325989</p>
              </div>
              <div className="contact-detail">
                <img
                  className="contact-img"
                  src={locationIcon}
                  alt="location"
                />
                <p>Lviv, Ukraine</p>
              </div>
            </div>
            2
          </p>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="">Your email</label>
          <input type="email" placeholder="Enter your email" />
          <label htmlFor="">Write your massage here</label>
          <textarea
            name="massage"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
