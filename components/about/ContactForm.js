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
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Card>
  );
}
function App() {
  return <ContactForm />;
}
export default App;