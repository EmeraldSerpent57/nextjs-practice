import classes from './ContactForm.module.css';

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Card from '../ui/Card';

function ContactForm() {
  const [state, handleSubmit] = useForm("mdovgzdg");
  if (state.succeeded) {
    return <p>Thanks for your email! We will be responding shortly!</p>;
  };

  return (
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            cols="50"
            rows="10"
            placeholder="Enter Your Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit" disabled={state.submitting}>
            <img src="/paper-plane.png" alt="Submit" />
          </button>
        </div>
      </form>
  );
}

function App() {
  return <ContactForm />;
}
export default App;