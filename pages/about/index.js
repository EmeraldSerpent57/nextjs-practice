import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

function AboutUsPage() {
    return (
      <Fragment>
        <Head>
          <title>About Us</title>
          <meta name="description" content="More about React World Meetups" />
        </Head>
        <div>This will be all about us</div>
      </Fragment>
    );
}

export default AboutUsPage;