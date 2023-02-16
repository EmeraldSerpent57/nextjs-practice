import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import AboutUs from "../../components/about/AboutUs";

function AboutUsPage() {
    return (
      <Fragment>
        <Head>
          <title>About Us</title>
          <meta name="description" content="More about React World Meetups" />
        </Head>
        <AboutUs />
      </Fragment>
    );
}

export default AboutUsPage;