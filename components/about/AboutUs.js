import Link from "next/link";
import classes from './AboutUs.module.css';

import ContactForm from "./ContactForm";

function AboutUs() {
    return (
      <>
        <header>
          <h1>Learn About React World Meetups</h1>
        </header>
        <div>
          <h3>Who we are...</h3>
          <p> (This will be about the site)</p>
        </div>
        <div>
          <h3>What we do...</h3>
          <p>(This will be about why the site was created)</p>
        </div>
        <div>
          <h3>About the creator...</h3>
          <p>(This will be about me?)</p>
        </div>
        <ContactForm />
        <footer className="footer">
          <p>
            Made with &#x2661; by
            <Link
              href="https://www.linkedin.com/in/alaina-harrison-48a4a81b7/"
              target="_blank"
            >
              Alaina Harrison
            </Link>
          </p>
        </footer>
      </>
    );
};

export default AboutUs;