import React from "react";

import "../styles/main.scss";
import "../styles/contactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h3>Sign up to our newsletter</h3>
      <form>
        <div className="contact-form__input">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
          <input type="email" name="email" placeholder="e-mail" />
        </div>
        <button className="contact-form__button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
