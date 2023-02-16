// our-domain.com/new-meetup
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-type': 'application/json',
            },
        });         //absolute path

        const data = await response.json();

        console.log(data);

        router.push('/');
    };

    return (
      <Fragment>
        <Head>
          <title>Add a New Meetup Location</title>
          <meta
            name="description"
            content="Add your own meetup location to create amazing networking opportunities!"
          />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
        <p className="disclaimer">Disclaimer: All meetups are fictional.</p>
      </Fragment>
    );
};

export default NewMeetupPage;