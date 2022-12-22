// our-domain.com/

import Head from "next/head";
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
      <MeetupList meetups={props.meetups} />
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

/*
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Italy Meetup",
    image:
      "https://a.cdn-hotels.com/gdcs/production86/d278/b66ef277-f5ef-43c0-8aa3-aa0c9ed5b118.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    address: "Piazza di Trevi, 00187 Roma RM, Italy",
    description: "Meeting on the right side of the Trevi Fountain.",
  },
  {
    id: "m2",
    title: "Germany Meetup",
    image:
      "https://neuschwansteintickets.com/images/disney-castle-neuschwanstein.jpg",
    address: "Neuschwansteinstrabe 20, 87645 Schwangau, Germany",
    description: "Meeting in the cafe of the Neuschwanstein Castle",
  },
  {
    id: "m3",
    title: "California, US Meetup",
    image:
      "https://national-park.com/wp-content/uploads/2016/04/Welcome-to-Channel-Islands-National-Park.jpg", //url, not file upload
    address: "Ventura, CA 93001",
    description: "Meeting in Channel Islands National Park",
  },
  {
    id: "m4",
    title: "Spain Meetup",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ef/81/15.jpg",
    address: "Calle Punta de Papagayo, 13, 35580 Yaiza, Las Palmas, Spain",
    description: "Meeting in the Playa Blanca area, in the Canary Islands",
  },
];
*/

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
