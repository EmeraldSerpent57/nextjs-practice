// our-domain.com/

import Head from "next/head";
import Link from "next/link";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React World Meetups</title>
        <meta
          name="description"
          content="Browse a list of meetups across the world where we can share our love of React in beautiful places!"
        />
      </Head>
      <header className="header">
        <h1>
          Browse all of our listed meetups to find the one closest to you!
        </h1>
      </header>
      <MeetupList meetups={props.meetups} />
      <p className="disclaimer">Disclaimer: All meetups are fictional.</p>
      <footer className="footer">
        <p class="copy">
          Made with &#x2661; by 
          <Link
            href="https://www.linkedin.com/in/alaina-harrison-48a4a81b7/"
            target="_blank"
          >
            Alaina Harrison
          </Link>
        </p>
      </footer>
    </Fragment>
  );
}

//this only works in your "page" component files, no other files
export async function getStaticProps() {
  //fetch data from API

  const client = await MongoClient.connect(
    "mongodb+srv://A57c1992:A57c1992@cluster0.esg3msz.mongodb.net/meetups?retryWrites=true&w=majority"
  ); //never run this on the client side!!!
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray(); //finds and fetches data from mongodb and arranges in to an array

  client.close(); //will close database when its done

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

/* Server-side Rendering example ONLY, not used here
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};  */
