/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import classes from './AboutUs.module.css';
import 'animate.css';

import App from "./ContactForm";

function AboutUs() {
    return (
      <>
        <div className={classes.body}>
          <header className={classes.header}>
            <h1>Learn About React World Meetups</h1>
          </header>
          <h3 className={classes.sectionHeader}>Who we are...</h3>
          <div className={classes.section}>
            <img
              src="https://www.kids-world-travel-guide.com/images/tajmahal_500.jpg"
              alt="Taj Mahal"
            />
            <p>
              Our goal at React World Meetups is to host a great networking
              event for all React developers to come together, share ideas, and
              build connections in a beautiful landmark close to you! We hope to
              see you at an event soon!
            </p>
          </div>
          <h3 className={classes.sectionHeader}>What we do...</h3>
          <div className={classes.section}>
            <img
              src="http://i1.wp.com/www.cleverpedia.com/wp-content/uploads/2014/07/stonehenge-featured.jpg?fit=880%2C584"
              alt="Stonehenge"
            />
            <p>
              React World Meetups is a site for all React developers
              (experienced and learning) to find a local social meetup to
              attend. If you don't see a meetup location near you, feel free to
              add a new meetup under the "Add New Meetup" page!
            </p>
          </div>
          <h3 className={classes.sectionHeader}>About the creator...</h3>
          <div className={classes.section}>
            <img src="/IMG_1211.jpg" alt="Alaina Harrison" />
            <p>
              Alaina Harrison is a front-end developer with a passion for all
              things React! She built this site as a re-creation of a React
              course project to showcase her skills in React and Next.js. If you
              would like to see more of her work, please contact her using the
              form below!
            </p>
          </div>
          <h3 className={classes.sectionHeader}>Contact Us...</h3>
          <div className={classes.contact}>
            <App />
          </div>
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
        </div>
      </>
    );
};

export default AboutUs;